// https://github.com/empress/field-guide/blob/v1.5.0-1/addon/components/dynamic-template.js

/* eslint-disable */

import Component from '@ember/component';
import GlimmerComponent from '@glimmer/component';

import { computed } from '@ember/object';
import { getOwner } from '@ember/application';
import { compileTemplate } from '@ember/template-compilation';

let templateOwnerMap = new Map();
let templateId = 0;

export default Component.extend({
  tagName: '',
  init() {
    this._super(...arguments);

    let owner = getOwner(this);
    let templateMap = templateOwnerMap.get(owner);
    if (templateMap === undefined) {
      templateMap = templateOwnerMap.set(owner, new Map());
    }
    this.templateMap = templateMap;
  },

  componentName: computed('templateString', 'componentId', function() {
    let { templateMap, templateString } = this;
    if (!templateString) { return null; }

    let componentName = templateMap.get(templateString);
    if (componentName === undefined) {
      let owner = getOwner(this);

      let compiledTemplate;
      try {
        compiledTemplate = compileTemplate(templateString);
      } catch (err) {
        console.error(err);
        console.log(templateString);
        compiledTemplate = compileTemplate(`<DynamicTemplateError />`)
      }

      let component = owner.factoryFor(`component:${this.componentId}`);

      if(!component) {
        component = class extends GlimmerComponent {};
      } else {
        component = class extends component.class {}
      }

      componentName = `some-prefix-${templateId++}`;

      owner.register(`component:${componentName}`, component);
      owner.register(`template:components/${componentName}`, compiledTemplate);
    }

    return componentName;
  })
});
