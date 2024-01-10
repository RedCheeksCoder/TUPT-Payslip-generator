export function findUserRole(userEmail, faculty, admins) {
  const isFaculty = faculty.some((faculty) => faculty.email === userEmail);
  const isAdmin = admins.some((admin) => admin.email === userEmail);

  if (isFaculty) return faculty;
  if (isAdmin) return admins;
}
