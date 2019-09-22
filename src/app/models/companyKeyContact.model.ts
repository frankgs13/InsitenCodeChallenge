export interface CompanyKeyContact {
    id: number;
    companyId: number;
    name: string;
    lastName: string;
    position: string;
    phone: string;
    email: string;
    createdDate?: string;
    updatedDate?: string;
    active?: boolean;
}