/*
    Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
*/

function toCamelCase(str){
    return (str == '') ? str : str.split(/[-_]/)
       .map((word, index) => {
          return (index === 0) ? word :word[0].toUpperCase() + word.slice(1)
     })
      .join('');
}