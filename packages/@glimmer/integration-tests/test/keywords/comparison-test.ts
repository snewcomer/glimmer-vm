import { RenderTest, test, jitSuite, syntaxErrorFor } from '../..';

class LessThanTest extends RenderTest {
  static suiteName = '{{lt}} keyword';

  @test
  ['it works']() {
    this.render(`{{lt 1 1}}`);

    this.assertHTML('false');
  }

  @test
  ['it works falsey']() {
    this.render(`{{lte 1 0}}`);

    this.assertHTML('false');
  }

  @test
  ['it works truthy']() {
    this.render(`{{lt 1 2}}`);

    this.assertHTML('true');
  }

  @test
  ['correctly resolves when values update eq']() {
    this.render(`{{lt this.foo this.bar}}`, { foo: 123, bar: 456 });

    this.assertHTML('true');

    this.rerender({ foo: 456 });

    this.assertHTML('false');

    this.rerender({ foo: 789 });

    this.assertHTML('false');
  }

  @test
  ['it errors']() {
    this.assert.throws(() => {
      this.render(`{{lt 1 2 1}}`);
    }, syntaxErrorFor('(lt) can receive a maximum of 2 arguments', '{{lt 1 2 1}}', 'an unknown module', 1, 0));
  }
}

class LessThanEqualTest extends RenderTest {
  static suiteName = '{{lte}} keyword';

  @test
  ['it works']() {
    this.render(`{{lte 1 2}}`);

    this.assertHTML('true');
  }

  @test
  ['it works truthy']() {
    this.render(`{{lte 1 1}}`);

    this.assertHTML('true');
  }

  @test
  ['it works falsey']() {
    this.render(`{{lte 1 0}}`);

    this.assertHTML('false');
  }

  @test
  ['correctly resolves when values update neq']() {
    this.render(`{{lte this.foo this.bar}}`, { foo: 123, bar: 456 });

    this.assertHTML('true');

    this.rerender({ foo: 456 });

    this.assertHTML('true');

    this.rerender({ foo: 789 });

    this.assertHTML('false');
  }

  @test
  ['it errors']() {
    this.assert.throws(() => {
      this.render(`{{lte 1 2 1}}`);
    }, syntaxErrorFor('(lte) can receive a maximum of 2 arguments', '{{lte 1 2 1}}', 'an unknown module', 1, 0));
  }
}

jitSuite(LessThanTest);
jitSuite(LessThanEqualTest);

class GreaterThanTest extends RenderTest {
  static suiteName = '{{gt}} keyword';

  @test
  ['it works']() {
    this.render(`{{gt 1 1}}`);

    this.assertHTML('false');
  }

  @test
  ['it works falsey']() {
    this.render(`{{gte 0 1}}`);

    this.assertHTML('false');
  }

  @test
  ['it works truthy']() {
    this.render(`{{gt 2 1}}`);

    this.assertHTML('true');
  }

  @test
  ['correctly resolves when values update eq']() {
    this.render(`{{gt this.foo this.bar}}`, { foo: 123, bar: 456 });

    this.assertHTML('false');

    this.rerender({ foo: 456 });

    this.assertHTML('false');

    this.rerender({ foo: 789 });

    this.assertHTML('true');
  }

  @test
  ['it errors']() {
    this.assert.throws(() => {
      this.render(`{{gt 1 2 1}}`);
    }, syntaxErrorFor('(gt) can receive a maximum of 2 arguments', '{{gt 1 2 1}}', 'an unknown module', 1, 0));
  }
}

class GreaterThanEqualTest extends RenderTest {
  static suiteName = '{{gte}} keyword';

  @test
  ['it works']() {
    this.render(`{{gte 2 1}}`);

    this.assertHTML('true');
  }

  @test
  ['it works truthy']() {
    this.render(`{{gte 1 1}}`);

    this.assertHTML('true');
  }

  @test
  ['it works falsey']() {
    this.render(`{{gte 0 1}}`);

    this.assertHTML('false');
  }

  @test
  ['correctly resolves when values update neq']() {
    this.render(`{{gte this.foo this.bar}}`, { foo: 123, bar: 456 });

    this.assertHTML('false');

    this.rerender({ foo: 456 });

    this.assertHTML('true');

    this.rerender({ foo: 789 });

    this.assertHTML('true');
  }

  @test
  ['it errors']() {
    this.assert.throws(() => {
      this.render(`{{gte 1 2 1}}`);
    }, syntaxErrorFor('(gte) can receive a maximum of 2 arguments', '{{gte 1 2 1}}', 'an unknown module', 1, 0));
  }
}

jitSuite(GreaterThanTest);
jitSuite(GreaterThanEqualTest);
