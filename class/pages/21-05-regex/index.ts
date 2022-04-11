// /apple/.test("apple")
// true

// /apple/.test("applq")
// false

// /a@a.com/.test("a@a.com")
// true

// /a@a.com/.test("b@a.com")
// false

// /\w@a.com/.test("sdfafdsfadfdsb@a.com")
// true

// /^\w@a.com$/.test("sdfafdsfadfdsb@a.com")
// false

// /^\w@a.com$/.test("w@a.com")
// true

// /^\w+@a.com$/.test("sdfsdfsdfsfsdfsdf@a.com")
// true

// /^\w?@a.com$/.test("@a.com")
// true

// /^\w?@a.com$/.test("d@a.com")
// true

// /^\w?@a.com$/.test("drrr@a.com")
// false

// /^\w*@a.com$/.test("@a.com")
// true

// /^\w*@a.com$/.test("e@a.com")
// true

// /^\w*@a.com$/.test("eeeeeee@a.com")
// true

// /^\w+@a.com$/.test("eeeeeee$a.com")
// false

// /^\w+@\w+.com$/.test("sdfs@dfd.com")
// true

// /^\w+@\w+.\w+$/.test("sdfs@dfd.net")
// true

// /^\w+@\w+.\w+$/.test("sdfs@dfd;.net")
// false

// /^\w+@\w+\.\w+$/.test("sdfs@dfd.net")
// true

// /^\w+@\w+.\w+$/.test("sdfs@dfd;.net")
// false

// /010-1234-5678/.test("010-1234-5678")
// true

// /^\d+-1234+-5678$/.test("01dfsf0-1234-5678")
// false

// /^\d+-1234+-5678$/.test("88787-1234-5678")
// true

// /^\d{3}-1234+-5678$/.test("88787-1234-5678")
// false

// /^\d{3}-1234+-5678$/.test("887-1234-5678")
// true

// /^\d{3}-\{3,4}-\d{4}$/.test("887-444-5678")
// false

// /^\d{3}-\d{3,4}-\d{4}$/.test("887-444-5678")
// true

// [a-zA-Z]

// \s
