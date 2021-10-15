import { expect } from 'chai';
import { click } from '@ember/test-helpers';
import { LabelTuple } from '@ember-bdd/core/test-support/dom-helpers';

function assertLength(collection: Array<unknown>, length = 1): void {
  expect(collection.length).equal(
    length,
    `Expected ${length} element(s), but ${collection.length} found`
  );
}

export default {
  'When I click (?:on )?$opinionatedElement'([
    collection /* , label, selector */,
  ]: LabelTuple): Promise<void> {
    assertLength(collection);
    return click(collection[0]);
  },

  // 'When I double click (?:on )?$opinionatedElement'([collection /* , label, selector */]) {
  //   assert(`Expected a single element, but ${collection.length} found`, collection.length === 1);
  //   return doubleClick(collection[0]);
  // },

  // 'When I fill "(.*)" into $opinionatedElement'(text, [collection /* , label, selector */]) {
  //   assert(`Expected a single element, but ${collection.length} found`, collection.length === 1);
  //   const element = collection[0];
  //   const target = findEditable(element);

  //   return fillIn(target, text);
  // },

  // 'When I move the mouse pointer into $opinionatedElement'([collection /* , label, selector */]) {
  //   assert(`Expected a single element, but ${collection.length} found`, collection.length === 1);
  //   return triggerEvent(collection[0], 'mouseenter');
  // },

  // 'When I move the mouse pointer out of $opinionatedElement'([collection /* , label, selector */]) {
  //   assert(`Expected a single element, but ${collection.length} found`, collection.length === 1);
  //   return triggerEvent(collection[0], 'mouseeleave');
  // },

  // 'When I focus into $opinionatedElement'([collection /* , label, selector */]) {
  //   assert(`Expected a single element, but ${collection.length} found`, collection.length === 1);
  //   return focus(collection[0]);
  // },

  // 'When I focus out of $opinionatedElement'([collection /* , label, selector */]) {
  //   assert(`Expected a single element, but ${collection.length} found`, collection.length === 1);
  //   return blur(collection[0]);
  // },

  // 'When I (de)?select (?:the )?(?:radio button|checkbox) $opinionatedElement'(
  //   de,
  //   [collection /* , label, selector */]
  // ) {
  //   assert(`Expected a single element, but ${collection.length} found.`, collection.length === 1);
  //   const [element] = collection;
  //   let input;

  //   if (element.type === 'checkbox' || element.type === 'radio') {
  //     input = element;
  //   } else {
  //     const inputs = element.querySelectorAll('input[type="text"], input[type="checkbox"]');
  //     assert(`Expected one checkbox/radio, but ${inputs.length} found`, inputs.length === 1);
  //     [input] = inputs;
  //   }

  //   assert('A radio button cannot be deselected', !(de && input.type === 'radio'));
  //   assert(`Expected input ${de ? 'not ' : ''}to be selected`, de ? input.checked : !input.checked);

  //   return click(input);
  // },

  // 'When I (de)?select (?:the )?(?:radio button|checkbox) $opinionatedString in $opinionatedElement'(
  //   de,
  //   text,
  //   [collection /* , label, selector */]
  // ) {
  //   assert(`Expected a single element, but ${collection.length} found.`, collection.length === 1);
  //   const [element] = collection;
  //   const input = findInputForLabelWithText(text, element);

  //   assert('Expected input to exist', input);
  //   assert(
  //     'Expected input to be a checkbox or radio button',
  //     input.type === 'checkbox' || input.type === 'radio'
  //   );
  //   assert('A radio button cannot be deselected', !(de && input.type === 'radio'));
  //   assert(`Expected input ${de ? '' : 'not '}to be selected`, de ? input.checked : !input.checked);

  //   return click(input);
  // },

  // 'When I (press|press down|release) the $opinionatedString key in $opinionatedElement'(
  //   eventRaw,
  //   key,
  //   [collection /* , label, selector */]
  // ) {
  //   assert(`Expected a single element, but ${collection.length} found`, collection.length === 1);

  //   const events = {
  //     press: 'keypress',
  //     'press down': 'keydown',
  //     release: 'keyup',
  //   };

  //   const event = events[eventRaw];

  //   const keys = key.split('+');

  //   const { modifiers, remainingKeys } = keys.reduce(
  //     ({ modifiers, remainingKeys }, key) => {
  //       if (key.toLowerCase() === 'ctrl') {
  //         modifiers.ctrlKey = true;
  //       } else if (key.toLowerCase() === 'alt') {
  //         modifiers.ctrlKey = true;
  //       } else if (key.toLowerCase() === 'shift') {
  //         modifiers.shiftKey = true;
  //       } else if (key.toLowerCase() === 'meta') {
  //         modifiers.ctrlKey = true;
  //       } else {
  //         remainingKeys.push(key);
  //       }

  //       return { modifiers, remainingKeys };
  //     },
  //     { modifiers: {}, remainingKeys: [] }
  //   );

  //   if (remainingKeys.length > 1) {
  //     throw new Error(
  //       `Can press only one non-modifier key at once, but tried to press ${remainingKeys.join('+')}`
  //     );
  //   }

  //   if (remainingKeys.length === 0) {
  //     throw new Error('A non-modifier key is required to press.');
  //   }

  //   triggerKeyEvent(collection[0], event, remainingKeys[0], modifiers);
  // },
};
