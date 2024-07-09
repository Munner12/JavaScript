var X = { Foo : 1};
var output = (function ()
{
    delete X.foo;
    return X.foo;
}
) ();
console.log(output);