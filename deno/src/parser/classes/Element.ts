import Parser from '../index.ts';
import ChildElement from './misc/ChildElement.ts';

import { YTNode } from '../helpers.ts';

class Element extends YTNode {
  static type = 'Element';

  model;
  child_elements?: ChildElement[];

  constructor(data: any) {
    super();

    if (Reflect.has(data, 'elementRenderer')) {
      return Parser.parseItem(data, Element) as Element;
    }

    const type = data.newElement.type.componentType;
    this.model = Parser.parseItem(type?.model);

    if (data.newElement?.childElements) {
      this.child_elements = data.newElement?.childElements?.map((el: any) => new ChildElement(el)) || null;
    }
  }
}

export default Element;