export function getRoles(num: number): string {
  let roles: string[] = [];
  if (num & 1) {
    roles.push('admin');
  }
  if (num & 2) {
    roles.push('owner');
  }
  if (num & 4) {
    roles.push('developer');
  }
  return roles.join(', ');
}
