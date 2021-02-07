
export interface Student {
  readonly id: number;
  readonly studentid: string
  firstname: string;
  lastname: string;
  gender: string;
  readonly created: Date;
  updated?: Date;
}

export type StudentRequiredProps = Pick<Student, "firstname" | "lastname" | "gender">;
