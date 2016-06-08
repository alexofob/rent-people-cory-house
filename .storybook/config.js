import { configure } from '@kadira/storybook';
import '../src/styles/reset';

function loadStories() {
  require('../src/core/components/stories');
  // require as many stories as you need.
}

configure(loadStories, module);


