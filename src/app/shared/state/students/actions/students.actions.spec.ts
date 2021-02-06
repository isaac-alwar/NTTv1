import * as fromStudents from './students.actions';

describe('loadStudentss', () => {
  it('should return an action', () => {
    expect(fromStudents.loadStudentss().type).toBe('[Students] Load Studentss');
  });
});
