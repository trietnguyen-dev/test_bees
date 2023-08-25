import { formatBalance } from '../utils/helpers';



test('Truong hop 1 check khi khong co $', () => { expect(formatBalance(1)).toBe("1,00") }) //sai
test('Truong hop 2 check format co $ khong', () => { expect(formatBalance(1)).toBe("$1,00") })//dung
test('Truong hop 3 check format khi la bon so', () => { expect(formatBalance(1234)).toBe("$123,4") })//sai
test('Truong hop 4 check format khi la bon so', () => { expect(formatBalance(1234)).toBe("$1,234,00") })//dung


