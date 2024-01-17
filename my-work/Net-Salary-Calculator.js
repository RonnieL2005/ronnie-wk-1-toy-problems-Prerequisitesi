function calculateSalary(basicSalary, benefits) {
    // Constants based on provided links
    const TAX_RATES = [
        { range: [0, 24000], rate: 10 },
        { range: [24001, 32333], rate: 15 },
        { range: [32334, 40333], rate: 20 },
        { range: [40334, 48333], rate: 25 },
        { range: [48334, 56000], rate: 30 },
        { range: [56001, Infinity], rate: 35 },
    ];

    const NHIF_RATES = [
        { range: [0, 5999], amount: 150 },
        { range: [6000, 7999], amount: 300 },
        { range: [8000, 11999], amount: 400 },
        { range: [12000, 14999], amount: 500 },
        { range: [15000, 19999], amount: 600 },
        { range: [20000, 24999], amount: 750 },
        { range: [25000, 29999], amount: 850 },
        { range: [30000, 34999], amount: 900 },
        { range: [35000, 39999], amount: 950 },
        { range: [40000, 44999], amount: 1000 },
        { range: [45000, 49999], amount: 1100 },
        { range: [50000, 59999], amount: 1200 },
        { range: [60000, 69999], amount: 1300 },
        { range: [70000, 79999], amount: 1400 },
        { range: [80000, 89999], amount: 1500 },
        { range: [90000, 99999], amount: 1600 },
        { range: [100000, Infinity], amount: 1700 },
    ];

    const NSSF_PERCENTAGE = 6;

    // Calculate gross salary
    const grossSalary = basicSalary + benefits;

    // Calculate tax (PAYE)
    let taxableIncome = grossSalary;
    let tax = 0;

    for (const { range, rate } of TAX_RATES) {
        const [lower, upper] = range;
        if (taxableIncome <= upper || upper === Infinity) {
            tax += (taxableIncome - lower + 1) * (rate / 100);
            break;
        } else {
            tax += (upper - lower + 1) * (rate / 100);
            taxableIncome -= (upper - lower + 1);
        }
    }

    // Calculate NHIF Deductions
    let nhifDeductions = 0;

    for (const { range, amount } of NHIF_RATES) {
        const [lower, upper] = range;
        if (grossSalary <= upper || upper === Infinity) {
            nhifDeductions = amount;
            break;
        }
    }

    // Calculate NSSF Deductions
    const nssfDeductions = (grossSalary * NSSF_PERCENTAGE) / 100;

    // Calculate net salary
    const netSalary = grossSalary - tax - nhifDeductions - nssfDeductions;

    return {
        grossSalary,
        tax,
        nhifDeductions,
        nssfDeductions,
        netSalary,
    };
}

// Example usage:
const basicSalary = 60000;
const benefits = 10000;
const result = calculateSalary(basicSalary, benefits);

console.log(result);
