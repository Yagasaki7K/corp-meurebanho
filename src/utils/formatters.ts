import { differenceInMonths, differenceInYears } from "date-fns";

export function formatCurrency(value: number): string {
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(value);
}

export function calculateAge(birthDate: string | Date): {
    months: number;
    years: number;
    formatted: string;
} {
    const birth = new Date(birthDate);
    const now = new Date();
    const months = differenceInMonths(now, birth);
    const years = differenceInYears(now, birth);

    if (years >= 1) {
        const remainingMonths = months % 12;
        return {
            months,
            years,
            formatted:
                remainingMonths > 0
                    ? `${years} ano${years > 1 ? "s" : ""} e ${remainingMonths} ${remainingMonths > 1 ? "meses" : "mês"}`
                    : `${years} ano${years > 1 ? "s" : ""}`,
        };
    }
    return {
        months,
        years: 0,
        formatted: `${months} ${months !== 1 ? "meses" : "mês"}`,
    };
}

export function formatPercentage(value: number): string {
    return `${value.toFixed(2)}%`;
}

export function formatDate(date: string | Date): string {
    return new Intl.DateTimeFormat("pt-BR").format(new Date(date));
}

export function calculateRentability(vendido: number, patrimonio: number): number {
    // Se não há patrimônio, retorna 0 para evitar divisão por zero
    if (patrimonio === 0) return 0;
    return (vendido / patrimonio) * 100;
}

export const typeLabels: Record<string, string> = {
    animal: "Animais",
    bezerro: "Bezerros",
    embrioes: "Embriões",
    aspiracoes: "Aspirações",
};
