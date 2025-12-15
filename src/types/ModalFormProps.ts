export type ModalFormProps = {
    type: "animal" | "bezerro" | "embrioes" | "aspiracoes";
    name: string;
    linkDoc?: string;
    linkVideo?: string;

    grandPFather?: string;
    grandPMother?: string;
    grandMFather?: string;
    grandMMother?: string;
    father?: string;
    mother?: string;

    race?: string;
    sex?: string;
    register?: string;
    location?: string;

    weight?: number;
    birthDate?: string;
    aquisitionDate?: string;

    valueBuy?: number;
    valueTotal?: number;

    status: string;

    isParticular: boolean;

    auctionName?: string;
    auctionDate?: string;

    sellerName?: string;
};
