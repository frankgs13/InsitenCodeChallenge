import { CompanyStatus } from './companyStatus.model';
import { CompanyKeyContact } from './companyKeyContact.model';

export interface Company {
    id: number;
    name: string;
    country: string;
    city: string;
    address: string;
    zipCode: string;
    idStatus: number;
    financialPerformance: number;
    createdDate?: string;
    updatedDate?: string;
    active?: boolean;
    idStatusNavigation?: CompanyStatus;
    companyKeyContacts?: CompanyKeyContact[];
}