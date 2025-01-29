
export class Project{

    id: number | null;
    projectName: string;
    clientName: string;
    leadBy: number;
    contactPerson: string;
    contact: string;
    startDate:Date;


    constructor(){
        this.id = null;
        this.projectName = '';
        this.clientName = '';
        this.leadBy = 0;
        this.contactPerson = '';
        this.contact = '';
        this.startDate = new Date();
    }
}