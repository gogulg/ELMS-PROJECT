export const patternEmail: string =
  '^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$';

export const patternPass: string =
  '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$';

export const patternfName: string = '[a-zA-Z ]{3,}';
export const patternCat: string = '[A-Z0-9]{5,}';
export const patternContact: string = '[0-9]{10}';

export const patterncourseTitle: string = '[a-zA-Z ]{3,}';
export const patternCourse: string = '[A-Z0-9]{5,}';
export const patterncoursePrice: string = '^[0-9]*$';
