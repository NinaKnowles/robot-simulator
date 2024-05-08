export function degreesToDirection(degrees: number): string {
  switch (degrees) {
    case 0:
      return 'north';
    case 90:
      return 'east';
    case 180:
      return 'south';
    case 270:
      return 'west';
    default:
      return 'unknown';
  }
}
  