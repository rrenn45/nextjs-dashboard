import CustomersTable  from '@/app/ui/customers/table';
import { fetchFilteredCustomers } from '@/app/lib/data';

export default async function Page({
    searchParams,
  }: {
    searchParams?: {
      query?: string;
      page?: string;
    };
  }){
    const query = searchParams?.query || '';
    return <CustomersTable query={query} />
}