const stripPrefix = require(`../strip-prefix`).default;

describe(`strip-prefix`, () => {
  it(`strips a prefix`, () => {
    expect(stripPrefix(`/foo/bar/`, `/foo`)).toBe(`/bar/`);
  });

  it(`strips first instance only`, () => {
    expect(stripPrefix(`/foo/foo/bar/`, `/foo`)).toBe(`/foo/bar/`);
  });

  it(`strips full instance only`, () => {
    expect(stripPrefix(`/footest/`, `/foo`)).toBe(`/footest/`);
  });

  it(`ignores prefix appearing elsewhere in the string`, () => {
    expect(stripPrefix(`/foo/bar/`, `bar`)).toBe(`/foo/bar/`);
  });

  it(`ignores a non-existent prefix`, () => {
    expect(stripPrefix(`/bar`, `/foo`)).toBe(`/bar`);
  });

  it(`returns input str if no prefix is provided`, () => {
    expect(stripPrefix(`/bar`)).toBe(`/bar`);
  });

  it(`returns "/" if str equals prefix`, () => {
    expect(stripPrefix(`/bar`, `/bar`)).toBe(`/`);
  });
});
