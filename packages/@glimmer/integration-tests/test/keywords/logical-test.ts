import { RenderTest, test, jitSuite, syntaxErrorFor, defineComponent, trackedObj } from '../..';

class AndTest extends RenderTest {
  static suiteName = '{{and}} keyword';

  @test
  ['it works']() {
    const AComponent = defineComponent({}, '{{and "one" 1 true}}');
    this.renderComponent(AComponent);

    this.assertHTML('true');
  }

  @test
  ['it works falsey']() {
    const AComponent = defineComponent({}, '{{and 1 false 2}}');
    this.renderComponent(AComponent);

    this.assertHTML('false');
  }

  @test
  ['it works with one argument']() {
    const AComponent = defineComponent({}, '{{and @value}}');
    this.renderComponent(AComponent, { value: true });

    this.assertHTML('true');
  }

  @test
  ['it works with empty arrays']() {
    const AComponent = defineComponent({}, '{{and @value}}');
    this.renderComponent(AComponent, { value: [] });

    this.assertHTML('');
  }

  @test
  ['it works with arrays']() {
    const AComponent = defineComponent({}, '{{and @value}}');
    this.renderComponent(AComponent, { value: [1, 2] });

    this.assertHTML('1,2');
  }

  @test
  ['it works when values update']() {
    let args = trackedObj({ foo: 123 });
    const AComponent = defineComponent({}, '{{and @foo}}');
    this.renderComponent(AComponent, args);

    args.foo = true;
    this.rerender({ foo: true });

    this.assertHTML('true');

    args.foo = false;
    this.rerender({ foo: false });

    this.assertHTML('false');
  }
}

jitSuite(AndTest);

class OrTest extends RenderTest {
  static suiteName = '{{or}} keyword';

  @test
  ['it works']() {
    const AComponent = defineComponent({}, '{{or "one" 1 true}}');
    this.renderComponent(AComponent);

    this.assertHTML('one');
  }

  @test
  ['it works falsey']() {
    const AComponent = defineComponent({}, '{{or false}}');
    this.renderComponent(AComponent);

    this.assertHTML('false');
  }

  @test
  ['it works with one argument']() {
    const AComponent = defineComponent({}, '{{or @value}}');
    this.renderComponent(AComponent, { value: true });

    this.assertHTML('true');
  }

  @test
  ['it works with empty arrays']() {
    const AComponent = defineComponent({}, '{{or @value}}');
    this.renderComponent(AComponent, { value: [] });

    this.assertHTML('');
  }

  @test
  ['it works with arrays']() {
    const AComponent = defineComponent({}, '{{or @value}}');
    this.renderComponent(AComponent, { value: [1, 2] });

    this.assertHTML('1,2');
  }

  @test
  ['it works when values update']() {
    let args = trackedObj({ foo: 123 });
    const AComponent = defineComponent({}, '{{or @foo}}');
    this.renderComponent(AComponent, args);

    args.foo = true;
    this.rerender(args);

    this.assertHTML('true');

    args.foo = false;
    this.rerender();

    this.assertHTML('false');
  }
}

jitSuite(OrTest);

class NotTest extends RenderTest {
  static suiteName = '{{not}} keyword';

  @test
  ['it works']() {
    const AComponent = defineComponent({}, '{{not 1}}');
    this.renderComponent(AComponent);

    this.assertHTML('false');
  }

  @test
  ['it works falsey']() {
    const AComponent = defineComponent({}, '{{not 0}}');
    this.renderComponent(AComponent);

    this.assertHTML('true');
  }

  @test
  ['it errors with too many arguments']() {
    this.assert.throws(() => {
      const AComponent = defineComponent({}, '{{not 1 2}}');
      this.renderComponent(AComponent);
    }, syntaxErrorFor('(not) only accepts 1 argument', '{{not 1 2}}', 'an unknown module', 1, 0));
  }
}

jitSuite(NotTest);
