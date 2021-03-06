import { RenderTest, test, jitSuite, syntaxErrorFor } from '../..';

class AndTest extends RenderTest {
  static suiteName = '{{and}} keyword';

  @test
  ['it works']() {
    this.render(`{{and "one" 1 true}}`);

    this.assertHTML('true');
  }

  @test
  ['it works falsey']() {
    this.render(`{{and 1 false 2}}`);

    this.assertHTML('false');
  }

  @test
  ['it works with one argument']() {
    this.render(`{{and this.value}}`, {
      value: true,
    });

    this.assertHTML('true');
  }

  @test
  ['it works with empty arrays']() {
    this.render(`{{and this.value}}`, {
      value: [],
    });

    this.assertHTML('');
  }

  @test
  ['it works with arrays']() {
    this.render(`{{and this.value}}`, {
      value: [1, 2],
    });

    this.assertHTML('1,2');
  }

  @test
  ['it works when values update']() {
    this.render(`{{and this.foo}}`, { foo: 123 });

    this.rerender({ foo: true });

    this.assertHTML('true');

    this.rerender({ foo: false });

    this.assertHTML('false');
  }
}

jitSuite(AndTest);

class OrTest extends RenderTest {
  static suiteName = '{{or}} keyword';

  @test
  ['it works']() {
    this.render(`{{or "one" 1 true}}`);

    this.assertHTML('one');
  }

  @test
  ['it works falsey']() {
    this.render(`{{or false}}`);

    this.assertHTML('false');
  }

  @test
  ['it works with one argument']() {
    this.render(`{{or this.value}}`, {
      value: true,
    });

    this.assertHTML('true');
  }

  @test
  ['it works with empty arrays']() {
    this.render(`{{or this.value}}`, {
      value: [],
    });

    this.assertHTML('');
  }

  @test
  ['it works with arrays']() {
    this.render(`{{or this.value}}`, {
      value: [1, 2],
    });

    this.assertHTML('1,2');
  }

  @test
  ['it works when values update']() {
    this.render(`{{or this.foo}}`, { foo: 123 });

    this.rerender({ foo: true });

    this.assertHTML('true');

    this.rerender({ foo: false });

    this.assertHTML('false');
  }
}

jitSuite(OrTest);

class NotTest extends RenderTest {
  static suiteName = '{{not}} keyword';

  @test
  ['it works']() {
    this.render(`{{not 1}}`);

    this.assertHTML('false');
  }

  @test
  ['it works falsey']() {
    this.render(`{{not 0}}`);

    this.assertHTML('true');
  }

  @test
  ['it errors with too many arguments']() {
    this.assert.throws(() => {
      this.render(`{{not 1 2}}`);
    }, syntaxErrorFor('(not) only accepts 1 argument', '{{not 1 2}}', 'an unknown module', 1, 0));
  }
}

jitSuite(NotTest);