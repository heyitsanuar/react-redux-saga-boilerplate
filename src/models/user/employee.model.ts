import { User } from "./user.model";

export class Employee extends User {
    public department: string;

    constructor() {
        super();
        this.department = '';
    }

}