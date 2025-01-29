
export class Employee{
    id: number | null;
    employeeName: string;
    contactNo: string;
    emailId: string;
    deptId: number;
    password: string;
    gender: string;
    role:string;
    createdDate:Date;
    createdBy:string;
    modifiedDate:Date;
    modifiedBy:string;


    constructor(){
        this.id = null;
        this.employeeName = '';
        this.contactNo = '';
        this.emailId = '';
        this.deptId = 0;
        this.password = '';
        this.gender = 'male';
        this.role = '';
        this.createdDate = new Date();
        this.createdBy = '';
        this.modifiedDate = new Date();
        this.modifiedBy = '';
    }
}