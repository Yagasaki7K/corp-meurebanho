import MyHead from "@/components/MyHead";
import MenuDetails from "@/components/MenuDetails";
import DashboardDetails from "@/components/DashboardDetails";
import { nameApp } from "@/utils/appInfo";
import {
    Baby,
    Beef,
    Check,
    Dna,
    DollarSign,
    Eye,
    EyeClosed,
    LogOut,
    Menu,
    Pencil,
    PiggyBank,
    Plus,
    PlusIcon,
    Search,
    ShoppingCart,
    ShoppingCartIcon,
    Syringe,
    Table2,
    Trash,
    TrendingUp,
    Trophy,
    Wallet,
    X,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { Area, AreaChart, Bar, BarChart, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Skeleton } from "@/utils/skeleton";
import { formatCurrency, typeLabels } from "@/utils/formatters";
import ModalDetails from "@/components/ModalDetails";
import { useForm } from "react-hook-form";
import { ModalFormProps } from "@/types/ModalFormProps";

const HomeDetails = styled.div`
    display: flex;
`;

const chartData = [
    { data: "Jan", patrimonio: 15000 },
    { data: "Fev", patrimonio: 18000 },
    { data: "Mar", patrimonio: 17000 },
    { data: "Abr", patrimonio: 20000 },
    { data: "Mai", patrimonio: 22000 },
    { data: "Jun", patrimonio: 21000 },
    { data: "Jul", patrimonio: 25000 },
    { data: "Ago", patrimonio: 24000 },
    { data: "Set", patrimonio: 27000 },
    { data: "Out", patrimonio: 30000 },
    { data: "Nov", patrimonio: 32000 },
    { data: "Dez", patrimonio: 35000 },
];

const cardRebanho = [
    {
        name: "Rebanho",
        type: "animal",
        race: "Nelore PO",
        loc: "Fazenda Sapocaia",
        birth: "25/05/1997",
        aquisitionDate: "25/09/2025",
        status: "ativo",
        avaliation: 23000,
    },
    {
        name: "Bezerrinho",
        type: "bezerro",
        race: "Nelore PO",
        loc: "Fazenda Sasadeio",
        birth: "25/05/1997",
        aquisitionDate: "30/09/2025",
        status: "ativo",
        avaliation: 35000,
    },
    {
        name: "Minhoca",
        type: "embriao",
        race: "Nelore PO",
        loc: "Fazenda Nei da Silva",
        birth: "25/05/1997",
        aquisitionDate: "23/10/2025",
        status: "ativo",
        avaliation: 16000,
    },
    {
        name: "Little Baby",
        type: "aspiracao",
        race: "Nelore PO",
        loc: "Fazenda Sapocaia",
        birth: "25/05/1997",
        aquisitionDate: "12/11/2025",
        status: "ativo",
        avaliation: 75000,
    },
    {
        name: "Mimosinha",
        type: "animal",
        race: "Nelore PO",
        loc: "Fazenda Sapocaia",
        birth: "25/05/1997",
        aquisitionDate: "24/12/2025",
        status: "ativo",
        avaliation: 21000,
    },
];

const cardVendas = [
    {
        name: "Mimosinha",
        type: "animal",
        dateBuy: "05/12/2025",
        percent: 75,
        valueBuy: 5250 * 2,
    },
    {
        name: "Little Baby",
        type: "aspiracao",
        dateBuy: "05/12/2025",
        percent: 75,
        valueBuy: 59250 * 2,
    },
    {
        name: "Bezerrinho",
        type: "bezerro",
        dateBuy: "05/12/2025",
        percent: 75,
        valueBuy: 19250 * 2,
    },
    {
        name: "Minhoca",
        type: "embriao",
        dateBuy: "05/12/2025",
        percent: 75,
        valueBuy: 4000 * 2,
    },
];

const cardCompras = [
    {
        name: "Mimosinha",
        type: "animal",
        dateBuy: "05/12/2025",
        percent: 75,
        valueBuy: 5250,
    },
    {
        name: "Little Baby",
        type: "aspiracao",
        dateBuy: "05/12/2025",
        percent: 75,
        valueBuy: 59250,
    },
    {
        name: "Bezerrinho",
        type: "bezerro",
        dateBuy: "05/12/2025",
        percent: 75,
        valueBuy: 19250,
    },
    {
        name: "Minhoca",
        type: "embriao",
        dateBuy: "05/12/2025",
        percent: 75,
        valueBuy: 4000,
    },
];

const patrimonioTotal = cardRebanho.reduce((acc, item) => acc + item.avaliation, 0);

const totalAnimais = cardRebanho.filter((i) => i.type === "animal").length;
const totalEmbrioes = cardRebanho.filter((i) => i.type === "embriao").length;
const totalAspiracoes = cardRebanho.filter((i) => i.type === "aspiracao").length;
const totalBezerros = cardRebanho.filter((i) => i.type === "bezerro").length;

const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

const now = new Date();

const last12Months = Array.from({ length: 12 }).map((_, i) => {
    const monthOffset = now.getMonth() - (11 - i);
    const year = now.getFullYear() + Math.floor(monthOffset / 12);
    const monthIndex = (monthOffset + 12) % 12;

    return {
        year,
        monthIndex,
        label: monthNames[monthIndex],
        key: `${year}-${monthIndex}`,
    };
});

const monthTotals: Record<string, number> = {};

last12Months.forEach((m) => {
    monthTotals[m.key] = 0;
});

cardRebanho.forEach((item) => {
    const [day, month, year] = item.aquisitionDate.split("/").map(Number);

    const d = new Date(year, month - 1, day);
    const key = `${d.getFullYear()}-${d.getMonth()}`;

    if (monthTotals[key] !== undefined) {
        monthTotals[key] += item.avaliation;
    }
});

let patrimonioAcumulado = 0;

const patrimonioChartData = last12Months.map((m) => {
    patrimonioAcumulado += monthTotals[m.key];

    return {
        data: m.label,
        patrimonio: patrimonioAcumulado,
    };
});

const pieData = [
    { name: "Animais", value: cardRebanho.filter((i) => i.type === "animal").reduce((a, b) => a + b.avaliation, 0) },
    { name: "Bezerros", value: cardRebanho.filter((i) => i.type === "bezerro").reduce((a, b) => a + b.avaliation, 0) },
    { name: "Embriões", value: cardRebanho.filter((i) => i.type === "embriao").reduce((a, b) => a + b.avaliation, 0) },
    { name: "Aspirações", value: cardRebanho.filter((i) => i.type === "aspiracao").reduce((a, b) => a + b.avaliation, 0) },
];

const participationData: { type: string; valor: number; label: string }[] = Object.values(
    cardRebanho.reduce<Record<string, { type: string; valor: number; label: string }>>((acc, item) => {
        if (!acc[item.type]) {
            acc[item.type] = { type: item.type, valor: 0, label: typeLabels[item.type] || item.type };
        }
        acc[item.type].valor += item.avaliation;
        return acc;
    }, {}),
);

export default function DashboardPage() {
    const [menuStep, setMenuStep] = useState("dashboard");
    const [menuStepRebanho, setMenuStepRebanho] = useState("animais");
    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = useState("");

    const [modalBuy, setModalBuy] = useState(false);
    const [modalSell, setModalSell] = useState(false);

    const [menuOpen, setMenuOpen] = useState(false);
    const [eyeOpen, setEyeOpen] = useState(false);

    const menuRef = useRef<HTMLDivElement>(null);

    const filteredAnimals = useMemo(() => {
        const searchTerm = search.toLowerCase();
        return cardRebanho.filter((animals) => {
            const title = animals.name?.toLowerCase() || "";
            const excerpt = animals.race?.toLowerCase() || "";
            const auction = animals.loc?.toLowerCase() || "";
            return title.includes(searchTerm) || excerpt.includes(searchTerm) || auction.includes(searchTerm);
        });
    }, [cardRebanho, search]);

    useEffect(() => {
        if (chartData) {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const tabValue = queryParams.get("tab");

        if (tabValue === "rebanho" || tabValue === "compras" || tabValue === "vendas") {
            setMenuStep(tabValue);
        } else {
            setMenuStep("dashboard");
        }
    }, []);

    useEffect(() => {
        if (window.innerWidth >= 768) {
            setMenuOpen(true);
            return;
        }

        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRef]);

    return (
        <div>
            <MyHead title="Dashboard" />

            <HomeDetails>
                {menuOpen ? (
                    <MenuDetails ref={menuRef}>
                        <div className="header">
                            <a onClick={() => setMenuStep("dashboard")}>
                                <img src="/logo.png" alt={nameApp} />
                                <p>{nameApp}</p>
                            </a>
                        </div>
                        <div className="menu">
                            <li className={menuStep === "dashboard" ? "active" : ""} onClick={() => setMenuStep("dashboard")}>
                                <Table2 size={"1.2rem"} /> <p>Dashboard</p>
                            </li>

                            <li className={menuStep === "rebanho" ? "active" : ""} onClick={() => setMenuStep("rebanho")}>
                                <Beef size={"1.2rem"} /> <p>Rebanho</p>
                            </li>

                            <li className={menuStep === "compras" ? "active" : ""} onClick={() => setMenuStep("compras")}>
                                <DollarSign size={"1.2rem"} /> <p>Compras</p>
                            </li>

                            <li className={menuStep === "vendas" ? "active" : ""} onClick={() => setMenuStep("vendas")}>
                                <ShoppingCart size={"1.2rem"} /> <p>Vendas</p>
                            </li>
                        </div>
                        <div className="logout">
                            <li className={menuStep === "sair" ? "active" : ""} onClick={() => setMenuStep("sair")}>
                                <LogOut size={"1.2rem"} /> <p>Sair</p>
                            </li>
                        </div>
                    </MenuDetails>
                ) : null}
                <DashboardDetails>
                    {menuStep === "dashboard" ? (
                        <>
                            <div className="dashboardHeader">
                                <div className="header">
                                    <h1 className="titleSection">Dashboard</h1>
                                    <p className="description">Visão geral dos seus investimentos</p>
                                </div>
                                <div className="rightContent">
                                    <div className="eyeSlashed">
                                        {eyeOpen ? <EyeClosed onClick={() => setEyeOpen(false)} /> : <Eye onClick={() => setEyeOpen(true)} />}
                                    </div>
                                    <div className="menuMobile">
                                        <Menu onClick={() => setMenuOpen(!menuOpen)} />
                                    </div>
                                </div>
                            </div>

                            <div className="cards">
                                <div className="card">
                                    <div className="header">
                                        <p className="title">Meu Patrimônio</p>
                                        <Wallet />
                                    </div>
                                    <h1 className="primary">{eyeOpen ? formatCurrency(patrimonioTotal) : "R$ -----,--"}</h1>
                                    <p className="description">Animais + Bezerros + Embriões + Aspirações</p>
                                </div>

                                <div className="card">
                                    <div className="header">
                                        <p className="title">Total Investido</p>
                                        <DollarSign />
                                    </div>
                                    <h1>{eyeOpen ? formatCurrency(patrimonioTotal) : "R$ -----,--"}</h1>
                                    <p className="description">Animais + Bezerros + Embriões + Aspirações</p>
                                </div>

                                <div className="card">
                                    <div className="header">
                                        <p className="title">Total Vendido</p>
                                        <TrendingUp />
                                    </div>
                                    <h1 className="primary">{eyeOpen ? formatCurrency(patrimonioTotal) : "R$ -----,--"}</h1>
                                    <p className="description">Minha % das Vendas</p>
                                </div>

                                <div className="card">
                                    <div className="header">
                                        <p className="title">Rentabilidade</p>
                                        <PiggyBank />
                                    </div>
                                    <h1 className="primary">{eyeOpen ? "25,5%" : "--,--%"}</h1>
                                    <p className="description">&nbsp;</p>
                                </div>

                                <div className="card">
                                    <div className="header">
                                        <p className="title">Ativos</p>
                                        <Beef />
                                    </div>
                                    <h1>{eyeOpen ? totalAnimais + totalAspiracoes + totalBezerros + totalEmbrioes : "--"}</h1>
                                    <p className="description">
                                        {totalAnimais} Animais · {totalBezerros} Bezerros · {totalEmbrioes} Embriões · {totalAspiracoes} Aspirações
                                    </p>
                                </div>
                            </div>

                            <div className="graphPatrimonio">
                                <h1>Evolução do Patrimônio</h1>

                                {isLoading ? (
                                    <Skeleton style={{ height: "250px", width: "100%" }} />
                                ) : (
                                    <ResponsiveContainer width="100%" height={250}>
                                        <AreaChart data={patrimonioChartData}>
                                            <defs>
                                                <linearGradient id="colorPatrimonio" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.8} />
                                                    <stop offset="95%" stopColor="var(--primary)" stopOpacity={0.1} />
                                                </linearGradient>
                                            </defs>
                                            <XAxis dataKey="data" fontSize={12} />
                                            <YAxis fontSize={12} tickFormatter={(v) => `R$${(v / 1000).toFixed(0)}k`} />
                                            <Tooltip formatter={(value) => formatCurrency(Number(value))} />
                                            <Area
                                                type="monotone"
                                                dataKey="patrimonio"
                                                stroke="var(--primary)"
                                                strokeWidth={2}
                                                fillOpacity={1}
                                                fill="url(#colorPatrimonio)"
                                            />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                )}
                            </div>

                            <div className="graphs">
                                <div className="graphType">
                                    <h1>Receita por Tipo</h1>

                                    {isLoading ? (
                                        <Skeleton style={{ height: "250px", width: "100%" }} />
                                    ) : (
                                        <ResponsiveContainer width="100%" height={200}>
                                            <PieChart>
                                                <Pie
                                                    data={pieData}
                                                    cx="50%"
                                                    cy="50%"
                                                    innerRadius={40}
                                                    outerRadius={80}
                                                    paddingAngle={5}
                                                    dataKey="value"
                                                    label={({ name, value }) => `${name}: ${formatCurrency(value)}`}
                                                >
                                                    {pieData.map((_, index) => (
                                                        <Cell key={`cell-${index}`} />
                                                    ))}
                                                </Pie>
                                                <Tooltip formatter={(v) => formatCurrency(Number(v))} />
                                            </PieChart>
                                        </ResponsiveContainer>
                                    )}
                                </div>

                                <div className="graphParticipation">
                                    <h1>Minha Participação por Animal</h1>

                                    {isLoading ? (
                                        <Skeleton style={{ height: "250px", width: "100%" }} />
                                    ) : (
                                        <ResponsiveContainer width="100%" height={200}>
                                            <BarChart data={participationData}>
                                                <XAxis dataKey="label" fontSize={12} />
                                                <YAxis fontSize={12} tickFormatter={(v) => `R$${(v as number) / 1000}k`} />
                                                <Tooltip formatter={(value) => formatCurrency(Number(value))} />
                                                <Bar dataKey="valor" fill="#1b9849" radius={[4, 4, 0, 0]} />
                                            </BarChart>
                                        </ResponsiveContainer>
                                    )}
                                </div>
                            </div>

                            <div className="graphAnimal">
                                <h1>Últimos Animais Registrados</h1>

                                {isLoading ? (
                                    <Skeleton style={{ height: "250px", width: "100%" }} />
                                ) : (
                                    <div className="cardsAnimal">
                                        {cardRebanho &&
                                            cardRebanho.slice(0, 9).map((animal, index) => (
                                                <div className="cardAnimal" key={index}>
                                                    <div className="leftContent">
                                                        {animal.type === "animal" ? (
                                                            <Beef />
                                                        ) : animal.type === "bezerro" ? (
                                                            <Baby />
                                                        ) : animal.type === "embriao" ? (
                                                            <Dna />
                                                        ) : animal.type === "aspiracao" ? (
                                                            <Syringe />
                                                        ) : null}

                                                        <div className="step">
                                                            <h4>{animal.name}</h4>
                                                            <p>{animal.race}</p>
                                                        </div>
                                                    </div>

                                                    <div className="rightContent">
                                                        <h4>{formatCurrency(animal.avaliation)}</h4>
                                                        <p className="percent">100% de {formatCurrency(animal.avaliation)}</p>

                                                        <p
                                                            className={
                                                                animal.status === "ativo"
                                                                    ? "active"
                                                                    : animal.status === "vendido"
                                                                      ? "sold"
                                                                      : "inactive"
                                                            }
                                                        >
                                                            {animal.status.toUpperCase()}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                )}
                            </div>
                        </>
                    ) : null}

                    {menuStep === "rebanho" ? (
                        <>
                            <div className="dashboardHeader">
                                <div className="header">
                                    <h1 className="titleSection">Rebanho</h1>
                                    <p className="description">Visualize seus animais, embriões e aspirações</p>
                                </div>
                                <div className="menuMobile">
                                    <Menu onClick={() => setMenuOpen(!menuOpen)} />
                                </div>
                            </div>

                            <div className="input">
                                <Search className="searchIcon" />
                                <input
                                    placeholder="Buscar por nome..."
                                    className="styledInput"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>

                            <div className="menuRebanho">
                                <li className={menuStepRebanho === "animais" ? "active" : ""} onClick={() => setMenuStepRebanho("animais")}>
                                    <Beef /> Animais ({cardRebanho.filter((item) => item.type === "animal").length})
                                </li>
                                <li className={menuStepRebanho === "bezerros" ? "active" : ""} onClick={() => setMenuStepRebanho("bezerros")}>
                                    <Baby /> Bezerros ({cardRebanho.filter((item) => item.type === "bezerro").length})
                                </li>
                                <li className={menuStepRebanho === "embriao" ? "active" : ""} onClick={() => setMenuStepRebanho("embriao")}>
                                    <Dna /> Embriões ({cardRebanho.filter((item) => item.type === "embriao").length})
                                </li>
                                <li className={menuStepRebanho === "aspiracao" ? "active" : ""} onClick={() => setMenuStepRebanho("aspiracao")}>
                                    <Syringe /> Aspirações ({cardRebanho.filter((item) => item.type === "aspiracao").length})
                                </li>
                            </div>
                            <div className="contentRebanho">
                                {menuStepRebanho === "animais" &&
                                    (!filteredAnimals || filteredAnimals.filter((item) => item.type === "animal").length === 0 ? (
                                        <div className="notFoundRebanho">
                                            <Beef />
                                            <h1>Nenhum animal encontrado</h1>
                                            <p>Informe ao suporte para registrar novos animais</p>
                                        </div>
                                    ) : (
                                        filteredAnimals
                                            .filter((item) => item.type === "animal")
                                            .map((animal, index) => (
                                                <div className="cardsRebanho" key={index}>
                                                    <div className="cardRebanho">
                                                        <div className="leftContent">{<Beef className="beef" />}</div>
                                                        <div className="rightContent">
                                                            <h1>{animal.name}</h1>
                                                            <p>{animal.race}</p>
                                                            <p>{animal.loc}</p>
                                                            <p>{animal.birth}</p>
                                                            <p
                                                                className={
                                                                    animal.status === "ativo"
                                                                        ? "green"
                                                                        : animal.status === "vendido"
                                                                          ? "yellow"
                                                                          : "red"
                                                                }
                                                            >
                                                                {animal.status}
                                                            </p>
                                                            <p className="value">
                                                                Avaliação: <b>{formatCurrency(animal.avaliation)}</b>
                                                            </p>
                                                            <div className="buttonsRebanho">
                                                                <button className="details" onClick={() => (window.location.href = "/gado")}>
                                                                    <Eye /> Detalhes
                                                                </button>
                                                                <button>
                                                                    <Pencil className="edit" />
                                                                </button>
                                                                <button>
                                                                    <Trash className="trash" />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                    ))}

                                {menuStepRebanho === "bezerros" &&
                                    (!filteredAnimals || filteredAnimals.filter((item) => item.type === "bezerro").length === 0 ? (
                                        <div className="notFoundRebanho">
                                            <Baby />
                                            <h1>Nenhum bezerro encontrado</h1>
                                            <p>Informe ao suporte para registrar novos bezerros</p>
                                        </div>
                                    ) : (
                                        filteredAnimals
                                            .filter((item) => item.type === "bezerro")
                                            .map((animal, index) => (
                                                <div className="cardsRebanho" key={index}>
                                                    <div className="cardRebanho">
                                                        <div className="leftContent">{<Baby className="baby" />}</div>
                                                        <div className="rightContent">
                                                            <h1>{animal.name}</h1>
                                                            <p>{animal.race}</p>
                                                            <p>{animal.loc}</p>
                                                            <p>{animal.birth}</p>
                                                            <p
                                                                className={
                                                                    animal.status === "ativo"
                                                                        ? "green"
                                                                        : animal.status === "vendido"
                                                                          ? "yellow"
                                                                          : "red"
                                                                }
                                                            >
                                                                {animal.status}
                                                            </p>
                                                            <p className="value">
                                                                Avaliação: <b>{formatCurrency(animal.avaliation)}</b>
                                                            </p>
                                                            <div className="buttonsRebanho">
                                                                <button className="details" onClick={() => (window.location.href = "/gado")}>
                                                                    <Eye /> Detalhes
                                                                </button>
                                                                <button>
                                                                    <Pencil className="edit" />
                                                                </button>
                                                                <button>
                                                                    <Trash className="trash" />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                    ))}

                                {menuStepRebanho === "embriao" &&
                                    (!filteredAnimals || filteredAnimals.filter((item) => item.type === "embriao").length === 0 ? (
                                        <div className="notFoundRebanho">
                                            <Dna />
                                            <h1>Nenhum embrião encontrado</h1>
                                            <p>Informe ao suporte para registrar novos embriões</p>
                                        </div>
                                    ) : (
                                        filteredAnimals
                                            .filter((item) => item.type === "embriao")
                                            .map((animal, index) => (
                                                <div className="cardsRebanho" key={index}>
                                                    <div className="cardRebanho">
                                                        <div className="leftContent">{<Dna className="dna" />}</div>
                                                        <div className="rightContent">
                                                            <h1>{animal.name}</h1>
                                                            <p>{animal.race}</p>
                                                            <p>{animal.loc}</p>
                                                            <p>{animal.birth}</p>
                                                            <p
                                                                className={
                                                                    animal.status === "ativo"
                                                                        ? "green"
                                                                        : animal.status === "vendido"
                                                                          ? "yellow"
                                                                          : "red"
                                                                }
                                                            >
                                                                {animal.status}
                                                            </p>
                                                            <p className="value">
                                                                Avaliação: <b>{formatCurrency(animal.avaliation)}</b>
                                                            </p>
                                                            <div className="buttonsRebanho">
                                                                <button className="details" onClick={() => (window.location.href = "/gado")}>
                                                                    <Eye /> Detalhes
                                                                </button>
                                                                <button>
                                                                    <Pencil className="edit" />
                                                                </button>
                                                                <button>
                                                                    <Trash className="trash" />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                    ))}

                                {menuStepRebanho === "aspiracao" &&
                                    (!filteredAnimals || filteredAnimals.filter((item) => item.type === "aspiracao").length === 0 ? (
                                        <div className="notFoundRebanho">
                                            <Syringe />
                                            <h1>Nenhuma aspiração encontrada</h1>
                                            <p>Informe ao suporte para registrar novas aspirações</p>
                                        </div>
                                    ) : (
                                        filteredAnimals
                                            .filter((item) => item.type === "aspiracao")
                                            .map((animal, index) => (
                                                <div className="cardsRebanho" key={index}>
                                                    <div className="cardRebanho">
                                                        <div className="leftContent">{<Syringe className="syringe" />}</div>
                                                        <div className="rightContent">
                                                            <h1>{animal.name}</h1>
                                                            <p>{animal.race}</p>
                                                            <p>{animal.loc}</p>
                                                            <p>{animal.birth}</p>
                                                            <p
                                                                className={
                                                                    animal.status === "ativo"
                                                                        ? "green"
                                                                        : animal.status === "vendido"
                                                                          ? "yellow"
                                                                          : "red"
                                                                }
                                                            >
                                                                {animal.status}
                                                            </p>
                                                            <p className="value">
                                                                Avaliação: <b>{formatCurrency(animal.avaliation)}</b>
                                                            </p>
                                                            <div className="buttonsRebanho">
                                                                <button className="details" onClick={() => (window.location.href = "/gado")}>
                                                                    <Eye /> Detalhes
                                                                </button>
                                                                <button>
                                                                    <Pencil className="edit" />
                                                                </button>
                                                                <button>
                                                                    <Trash className="trash" />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                    ))}
                            </div>
                        </>
                    ) : null}

                    {menuStep === "compras" ? (
                        <>
                            <div className="headerBuy">
                                <div className="leftContent">
                                    <div className="step">
                                        <h1 className="titleSection">Compras</h1>
                                        <p className="description">Registre seus custos e investimentos</p>
                                    </div>

                                    <div className="menuMobile">
                                        <Menu onClick={() => setMenuOpen(!menuOpen)} />
                                    </div>
                                </div>
                                <div className="rightContent">
                                    <button onClick={() => setModalBuy(true)}>
                                        <Plus />
                                        Nova Compra
                                    </button>
                                </div>
                            </div>

                            <div className="cardBuy">
                                <h3>Total Investido</h3>
                                <h1>{formatCurrency(cardCompras ? cardCompras.reduce((total, item) => total + item.valueBuy, 0) : 0)}</h1>
                            </div>

                            <div className="contentBuy">
                                {cardCompras ? (
                                    cardCompras.slice(0, 9).map((animal, index) => (
                                        <div className="cardSell" key={index}>
                                            <div className="leftContent">
                                                <ShoppingCart />

                                                <div className="step">
                                                    <h4>{animal.name}</h4>
                                                    <p>
                                                        {typeLabels[animal.type]} · {animal.dateBuy}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="rightContent">
                                                <div className="price">
                                                    <h4>{formatCurrency(animal.valueBuy)}</h4>
                                                    <p className="percent">{animal.percent}% comprado</p>
                                                </div>
                                                <div className="delete">
                                                    <Trash />
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="notFoundBuy">
                                        <ShoppingCartIcon />
                                        <h1>Nenhuma compra registrada</h1>
                                        <p>Clique em "Nova Compra" para registrar</p>
                                    </div>
                                )}
                            </div>
                        </>
                    ) : null}

                    {menuStep === "vendas" ? (
                        <>
                            <div className="headerBuy">
                                <div className="leftContent">
                                    <div className="step">
                                        <h1 className="titleSection">Vendas</h1>
                                        <p className="description">Registre suas vendas</p>
                                    </div>

                                    <div className="menuMobile">
                                        <Menu onClick={() => setMenuOpen(!menuOpen)} />
                                    </div>
                                </div>
                                <div className="rightContent">
                                    <button onClick={() => setModalSell(true)}>
                                        <Plus />
                                        Nova Venda
                                    </button>
                                </div>
                            </div>

                            <div className="cardBuy">
                                <h3>Total Recebido</h3>
                                <h1 className="primary">
                                    {formatCurrency(cardVendas ? cardVendas.reduce((total, item) => total + item.valueBuy, 0) : 0)}
                                </h1>
                            </div>

                            <div className="contentBuy">
                                {cardVendas ? (
                                    cardVendas.slice(0, 9).map((animal, index) => (
                                        <div className="cardSell" key={index}>
                                            <div className="leftContent">
                                                <DollarSign />

                                                <div className="step">
                                                    <h4>{animal.name}</h4>
                                                    <p>
                                                        {typeLabels[animal.type]} · {animal.dateBuy}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="rightContent">
                                                <div className="price">
                                                    <h4>{formatCurrency(animal.valueBuy)}</h4>
                                                    <p className="percent">
                                                        Total: {formatCurrency(animal.valueBuy + (animal.percent / 100) * animal.valueBuy)}
                                                    </p>
                                                </div>
                                                <div className="delete">
                                                    <Trash />
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="notFoundBuy">
                                        <DollarSign />
                                        <h1>Nenhuma venda registrada</h1>
                                        <p>Clique em "Nova Venda" para registrar</p>
                                    </div>
                                )}
                            </div>
                        </>
                    ) : null}

                    {modalBuy && <ModalBuy onClose={() => setModalBuy(false)} />}
                    {modalSell && <ModalSell onClose={() => setModalSell(false)} />}
                </DashboardDetails>
            </HomeDetails>
        </div>
    );
}

const ModalBuy = ({ onClose }: { onClose: () => void }) => {
    const { register, handleSubmit, watch } = useForm<ModalFormProps>({
        defaultValues: {
            isParticular: false,
            status: "ativo",
            type: "animal",
        },
    });

    const [partners, setPartners] = useState([{ name: "", percent: "", isOwner: false, isOnLocation: false }]);
    const [achivements, setAchivements] = useState([{ name: "", event: "", date: "", photoURL: "" }]);

    function addPartner() {
        setPartners([...partners, { name: "", percent: "", isOwner: false, isOnLocation: false }]);
    }

    function addAchivement() {
        setAchivements([...achivements, { name: "", event: "", date: "", photoURL: "" }]);
    }

    function deletePartner(index: number) {
        setPartners(partners.filter((_, i) => i !== index));
    }

    function deleteAchivement(index: number) {
        setAchivements(achivements.filter((_, i) => i !== index));
    }

    const isParticular = watch("isParticular");

    const onSubmit = (data: ModalFormProps) => {
        console.log(data);
        // aqui você envia ao backend, salva, etc.
    };

    return (
        <ModalDetails>
            <div className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2>Nova Compra</h2>
                        <button onClick={onClose}>
                            <X />
                        </button>
                    </div>

                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <label>Tipo de Compra*</label>
                        <select {...register("type")}>
                            <option value="animal">Animal</option>
                            <option value="bezerro">Bezerro</option>
                            <option value="embriao">Embrião</option>
                            <option value="aspiracao">Aspiração</option>
                        </select>

                        <label>Nome*</label>
                        <input type="text" {...register("name", { required: true })} />

                        <label>Link da Documentação</label>
                        <input type="text" {...register("linkDoc")} placeholder="https://drive.google.com/... ou link do documento" />

                        <label>Link do Vídeo (YouTube)</label>
                        <input type="text" {...register("linkVideo")} placeholder="https://youtube.com/watch?v=..." />

                        <div className="genealogy">
                            <h4>Linhagem Paterna</h4>

                            <div className="fathers">
                                <div className="step">
                                    <label>Pai Paterno</label>
                                    <input type="text" {...register("grandPFather")} />
                                </div>

                                <div className="step">
                                    <label>Mãe Paterno</label>
                                    <input type="text" {...register("grandPMother")} />
                                </div>
                            </div>

                            <label>Pai do Animal</label>
                            <input type="text" {...register("father")} />

                            <h4>Linhagem Materna</h4>

                            <div className="mathers">
                                <div className="step">
                                    <label>Pai Materno</label>
                                    <input type="text" {...register("grandMFather")} />
                                </div>

                                <div className="step">
                                    <label>Mãe Materno</label>
                                    <input type="text" {...register("grandMMother")} />
                                </div>
                            </div>

                            <label>Mãe do Animal</label>
                            <input type="text" {...register("mother")} />
                        </div>

                        <label>Raça</label>
                        <input type="text" {...register("race")} />

                        <div className="infos">
                            <div className="step">
                                <label>Sexo</label>
                                <select {...register("sex")}>
                                    <option value="">Selecione</option>
                                    <option value="macho">Macho</option>
                                    <option value="fêmea">Fêmea</option>
                                </select>
                            </div>

                            <div className="step">
                                <label>Registro</label>
                                <input type="text" placeholder="ABC123" {...register("register")} />
                            </div>
                        </div>

                        <label>Localização</label>
                        <input type="text" placeholder="Ex: Fazenda São João, Ribeirão Preto - SP" {...register("location")} />

                        <div className="infos">
                            <div className="step">
                                <label>Peso (kg)</label>
                                <input type="number" {...register("weight", { valueAsNumber: true })} />
                            </div>

                            <div className="step">
                                <label>Data de Nascimento</label>
                                <input type="date" {...register("birthDate")} />
                            </div>
                        </div>

                        <label>Data de Aquisição</label>
                        <input type="date" {...register("aquisitionDate")} />

                        <label>Valor da Compra (R$)</label>
                        <input type="number" {...register("valueBuy", { valueAsNumber: true })} placeholder="Quanto foi pago pela parte" />

                        <label>Valor de Avaliação Total (R$)</label>
                        <input type="number" {...register("valueTotal", { valueAsNumber: true })} placeholder="Valor total do animal" />

                        <label>Status</label>
                        <select {...register("status")}>
                            <option value="ativo">Ativo</option>
                            <option value="vendido">Vendido</option>
                            <option value="falecido">Falecido</option>
                        </select>

                        <div className="infoCheckbox">
                            <input type="checkbox" {...register("isParticular")} />
                            <p>Venda Direto (Particular)</p>
                        </div>

                        {!isParticular && (
                            <div className="auction">
                                <div className="step">
                                    <label>Leilão Adquirido</label>
                                    <input type="text" {...register("auctionName")} placeholder="Nome do leilão" />
                                </div>
                                <div className="step">
                                    <label>Data do Leilão</label>
                                    <input type="date" {...register("auctionDate")} />
                                </div>
                            </div>
                        )}

                        <label>Nome do Vendedor</label>
                        <input type="text" {...register("sellerName")} />

                        <div className="achivements">
                            <div className="header">
                                <div className="icon">
                                    <Trophy />
                                </div>

                                <div className="title">
                                    <h4>Prêmios e Conquistas</h4>
                                    <p>Adicione troféus e premiações do animal</p>
                                </div>

                                <button onClick={() => addAchivement()}>
                                    <PlusIcon /> Novo Prêmio
                                </button>
                            </div>

                            {achivements.map((achivement, index) => (
                                <div key={index} className="partners">
                                    <div className="step">
                                        <input
                                            type="text"
                                            placeholder="Nome do Prêmio"
                                            value={achivement.name}
                                            onChange={(e) => {
                                                const newPartners = [...partners];
                                                newPartners[index].name = e.target.value;
                                                setPartners(newPartners);
                                            }}
                                        />
                                    </div>

                                    <div className="step">
                                        <input
                                            type="text"
                                            placeholder="Evento (Ex. Expozebu 2024)"
                                            value={achivement.name}
                                            onChange={(e) => {
                                                const newPartners = [...partners];
                                                newPartners[index].name = e.target.value;
                                                setPartners(newPartners);
                                            }}
                                        />
                                        ''{" "}
                                        <div className="stepholder">
                                            <input
                                                type="date"
                                                max={100}
                                                placeholder="dd/mm/aaaa"
                                                value={achivement.date}
                                                onChange={(e) => {
                                                    const newPartners = [...partners];
                                                    newPartners[index].percent = e.target.value;
                                                    setPartners(newPartners);
                                                }}
                                            />
                                        </div>
                                        <div className="stepholder-2">
                                            {index > 0 && (
                                                <button onClick={() => deleteAchivement(index)}>
                                                    <Trash />
                                                </button>
                                            )}
                                        </div>
                                    </div>

                                    <div className="step">
                                        <input
                                            type="text"
                                            placeholder="Link da Imagem (URL)"
                                            value={achivement.photoURL}
                                            onChange={(e) => {
                                                const newAchivements = [...achivements];
                                                newAchivements[index].name = e.target.value;
                                                setAchivements(newAchivements);
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {partners.map((partner, index) => (
                            <div key={index} className="partners">
                                <h4>Proprietários e Sócios</h4>

                                <div className="step">
                                    <div className="stepholder">
                                        <label>Nome*</label>
                                        <input
                                            type="text"
                                            placeholder="Nome do proprietário"
                                            value={partner.name}
                                            onChange={(e) => {
                                                const newPartners = [...partners];
                                                newPartners[index].name = e.target.value;
                                                setPartners(newPartners);
                                            }}
                                        />
                                    </div>

                                    <div className="stepholder">
                                        <label>%*</label>
                                        <input
                                            type="number"
                                            max={100}
                                            placeholder="%"
                                            value={partner.percent}
                                            onChange={(e) => {
                                                const newPartners = [...partners];
                                                newPartners[index].percent = e.target.value;
                                                setPartners(newPartners);
                                            }}
                                        />
                                    </div>

                                    <div className="stepholder">
                                        {index > 0 && (
                                            <button onClick={() => deletePartner(index)}>
                                                <Trash />
                                            </button>
                                        )}
                                    </div>
                                </div>

                                <div className="infoCheckbox">
                                    <input
                                        type="checkbox"
                                        checked={partner.isOwner}
                                        onChange={(e) => {
                                            const newPartners = [...partners];
                                            newPartners[index].isOwner = e.target.checked;
                                            setPartners(newPartners);
                                        }}
                                    />
                                    <p>Sou o proprietário (usuário logado)</p>
                                </div>

                                <div className="infoCheckbox">
                                    <input
                                        type="checkbox"
                                        checked={partner.isOnLocation}
                                        onChange={(e) => {
                                            const newPartners = [...partners];
                                            newPartners[index].isOnLocation = e.target.checked;
                                            setPartners(newPartners);
                                        }}
                                    />
                                    <p>O animal está na localização</p>
                                </div>
                            </div>
                        ))}

                        <button className="partnerBtn" onClick={addPartner}>
                            <Plus /> Adicionar Sócio
                        </button>

                        <div className="percentOwner">
                            <Check /> Total: 100%
                        </div>

                        <div className="buttons">
                            <button type="button" className="cancel" onClick={onClose}>
                                Cancelar
                            </button>
                            <button className="green" type="submit">
                                Registrar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </ModalDetails>
    );
};

const ModalSell = ({ onClose }: { onClose: () => void }) => {
    return (
        <ModalDetails>
            <div className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2>Nova Venda</h2>
                        <button onClick={onClose}>
                            <X />
                        </button>
                    </div>
                    <form>
                        <label>Tipo de Compra*</label>
                        <select id="type" name="type">
                            <option value="animal">Animal</option>
                            <option value="bezerro">Bezerro</option>
                            <option value="embriao">Embrião</option>
                            <option value="aspiracao">Aspiração</option>
                        </select>

                        <div className="buttons">
                            <button className="cancel" onClick={onClose}>
                                Cancelar
                            </button>
                            <button className="green" type="submit">
                                Registrar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </ModalDetails>
    );
};
