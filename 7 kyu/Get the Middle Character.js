function getMiddle(s)
{
  let lengthWord = s.length;
  return (lengthWord % 2 == 0) ? s[lengthWord / 2 - 1] + s[lengthWord / 2] : s[(lengthWord - 1) / 2 ];
}