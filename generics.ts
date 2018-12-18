// Generic functions

// This Generic function is indicated by the <T> declaration before the parameter in the method signature,
// This function takes a generic param of type t and returns a value of type t
//The benefit here is the type T allows the compiler to recognise the passed in type and provide compilation errors, hints and intellisence appropriately.

function Echo<T>( data : T) : T{
return data;
}

// so in this instance, the intellisence recognises that horse is a string and adding the . provides intellisense with the available string based methods
console.log(Echo("horse").length);

console.log(Echo(234));

console.log(Echo({firstname: "Jimmy", age: 23}))