export function formatBalance(balance: number): string {
    const balanceStr = balance.toFixed(2);
    const parts = balanceStr.split('.');

    const partFirst = parts[0];
    const partNext = parts[1];

    const formattedpartFirst = partFirst.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `$${formattedpartFirst},${partNext}`;
}
export const formatDate = (date: Date): string => {
    const dateVN = date.toLocaleDateString('vi-VN', { year: 'numeric', month: '2-digit', day: '2-digit' });
    const timeVN = date.toLocaleTimeString('vi-VN', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
    return `${dateVN} ${timeVN}`;
};
export const generateRandomDate = (): Date => {
    const startDate = new Date(2000, 0, 1);
    const endDate = new Date();

    const randomTime = startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime());
    return new Date(randomTime);
};
