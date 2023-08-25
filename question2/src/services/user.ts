import { formatBalance, generateRandomDate } from "../utils/helpers";

interface TUser {
   id?: string;
   name?: string;
   balance?: number;
    formattedBalance?: string; 
   email?: string;
   registerAt?: Date;
   active?: boolean;
}


export const generateUsers = (): TUser[] => {
   const users: TUser[] = [];
   for (let i = 1; i <= 100; i++) {
    const rawBalance = Math.random() * 10 * i;
      users.push({
         id: `id${i}`,
         name: `User${i}`,
        balance: rawBalance,
         formattedBalance: formatBalance(Math.random() * 10 * i) ,
         email: `user${i}@gmail.com`,
         registerAt: generateRandomDate(),
         active: i % 2 === 0,
      });
   }
   return users;
};