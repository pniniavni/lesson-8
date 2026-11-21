export default function BirthDate({ birthDate }) {
  const age = new Date().getFullYear() - birthDate.getFullYear();

  return (
    <p>
      מזל טוב! אתה בן {age}. תאריך הלידה שלך הוא:{" "}
      {birthDate.toLocaleDateString("he-IL")}
    </p>
  );
}