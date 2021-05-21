import { RenderTest, test, jitSuite, syntaxErrorFor, defineComponent, trackedObj } from '../..';

class LessThanTest extends RenderTest {
  static suiteName = '{{lt}} keyword';

  @test
  ['it works']() {
    const AComponent = defineComponent({}, '{{lt 1 1}}');
    this.renderComponent(AComponent);

    this.assertHTML('false');
  }

  @test
  ['it works falsey']() {
    const AComponent = defineComponent({}, '{{lt 1 0}}');
    this.renderComponent(AComponent);

    this.assertHTML('false');
  }

  @test
  ['it works truthy']() {
    const AComponent = defineComponent({}, '{{lt 1 2}}');
    this.renderComponent(AComponent);

    this.assertHTML('true');
  }

  @test
  ['correctly resolves when values update eq']() {
    let args = trackedObj({ foo: 123, bar: 456 });
    const AComponent = defineComponent({}, '{{lt @foo @bar}}');
    this.renderComponent(AComponent, args);

    this.assertHTML('true');

    args.foo = 456;
    this.rerender({ foo: 456 });

    this.assertHTML('false');

    args.foo = 789;
    this.rerender({ foo: 789 });

    this.assertHTML('false');
  }

  @test
  ['it errors']() {
    this.assert.throws(() => {
      const AComponent = defineComponent({}, '{{lt 1 2 1}}');
      this.renderComponent(AComponent);
    }, syntaxErrorFor('(lt) can receive a maximum of 2 arguments', '{{lt 1 2 1}}', 'an unknown module', 1, 0));
  }
}

class LessThanEqualTest extends RenderTest {
  static suiteName = '{{lte}} keyword';

  @test
  ['it works']() {
    const AComponent = defineComponent({}, '{{lte 1 2}}');
    this.renderComponent(AComponent);

    this.assertHTML('true');
  }

  @test
  ['it works truthy']() {
    const AComponent = defineComponent({}, '{{lte 1 1}}');
    this.renderComponent(AComponent);

    this.assertHTML('true');
  }

  @test
  ['it works falsey']() {
    const AComponent = defineComponent({}, '{{lte 1 0}}');
    this.renderComponent(AComponent);

    this.assertHTML('false');
  }

  @test
  ['correctly resolves when values update neq']() {
    let args = trackedObj({ foo: 123, bar: 456 });
    const AComponent = defineComponent({}, '{{lte @foo @bar}}');
    this.renderComponent(AComponent, args);

    this.assertHTML('true');

    args.foo = 456;
    this.rerender();

    this.assertHTML('true');

    args.foo = 789;
    this.rerender();

    this.assertHTML('false');
  }

  @test
  ['it errors']() {
    this.assert.throws(() => {
      const AComponent = defineComponent({}, '{{lte 1 2 1}}');
      this.renderComponent(AComponent);
    }, syntaxErrorFor('(lte) can receive a maximum of 2 arguments', '{{lte 1 2 1}}', 'an unknown module', 1, 0));
  }
}

jitSuite(LessThanTest);
jitSuite(LessThanEqualTest);

class GreaterThanTest extends RenderTest {
  static suiteName = '{{gt}} keyword';

  @test
  ['it works']() {
    const AComponent = defineComponent({}, '{{gt 1 1}}');
    this.renderComponent(AComponent);

    this.assertHTML('false');
  }

  @test
  ['it works falsey']() {
    const AComponent = defineComponent({}, '{{gt 0 1}}');
    this.renderComponent(AComponent);

    this.assertHTML('false');
  }

  @test
  ['it works truthy']() {
    const AComponent = defineComponent({}, '{{gt 2 1}}');
    this.renderComponent(AComponent);

    this.assertHTML('true');
  }

  @test
  ['correctly resolves when values update eq']() {
    let args = trackedObj({ foo: 123, bar: 456 });
    const AComponent = defineComponent({}, '{{gt @foo @bar}}');
    this.renderComponent(AComponent, args);

    this.assertHTML('false');

    args.foo = 456;
    this.rerender();

    this.assertHTML('false');

    args.foo = 789;
    this.rerender();

    this.assertHTML('true');
  }

  @test
  ['it errors']() {
    this.assert.throws(() => {
      const AComponent = defineComponent({}, '{{gt 1 2 1}}');
      this.renderComponent(AComponent);
    }, syntaxErrorFor('(gt) can receive a maximum of 2 arguments', '{{gt 1 2 1}}', 'an unknown module', 1, 0));
  }
}

class GreaterThanEqualTest extends RenderTest {
  static suiteName = '{{gte}} keyword';

  @test
  ['it works']() {
    const AComponent = defineComponent({}, '{{gte 2 1}}');
    this.renderComponent(AComponent);

    this.assertHTML('true');
  }

  @test
  ['it works truthy']() {
    const AComponent = defineComponent({}, '{{gte 1 1}}');
    this.renderComponent(AComponent);

    this.assertHTML('true');
  }

  @test
  ['it works falsey']() {
    const AComponent = defineComponent({}, '{{gte 0 1}}');
    this.renderComponent(AComponent);

    this.assertHTML('false');
  }

  @test
  ['correctly resolves when values update neq']() {
    let args = trackedObj({ foo: 123, bar: 456 });
    const AComponent = defineComponent({}, '{{gte @foo @bar}}');
    this.renderComponent(AComponent, args);

    this.assertHTML('false');

    args.foo = 456;
    this.rerender();

    this.assertHTML('true');

    args.foo = 789;
    this.rerender();

    this.assertHTML('true');
  }

  @test
  ['it errors']() {
    this.assert.throws(() => {
      const AComponent = defineComponent({}, '{{gte 1 2 1}}');
      this.renderComponent(AComponent);
    }, syntaxErrorFor('(gte) can receive a maximum of 2 arguments', '{{gte 1 2 1}}', 'an unknown module', 1, 0));
  }
}

jitSuite(GreaterThanTest);
jitSuite(GreaterThanEqualTest);
