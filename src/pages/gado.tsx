import MenuDetails from "@/components/MenuDetails";
import MyHead from "@/components/MyHead";
import SlugDetails from "@/components/SlugDetails";
import { nameApp } from "@/utils/appInfo";
import { calculateAge, formatCurrency } from "@/utils/formatters";
import {
    ArrowDown,
    ArrowLeft,
    Beef,
    ChevronDown,
    ChevronUp,
    Dna,
    DollarSign,
    Eye,
    EyeClosed,
    LogOut,
    MapPin,
    Menu,
    ShoppingCart,
    Table2,
    Trophy,
    Users,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const SlugPage = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMap, setIsMap] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const [eyeOpen, setEyeOpen] = useState(false);

    const dateAnimal = calculateAge("01/31/2024");

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
        <SlugDetails>
            <MyHead title="Gado" />
            {menuOpen ? (
                <MenuDetails ref={menuRef}>
                    <div className="header">
                        <a onClick={() => (window.location.href = "/dashboard")}>
                            <img src="/logo.png" alt={nameApp} />
                            <p>{nameApp}</p>
                        </a>
                    </div>
                    <div className="menu">
                        <li onClick={() => (window.location.href = "/dashboard")}>
                            <Table2 size={"1.2rem"} /> <p>Dashboard</p>
                        </li>

                        <li onClick={() => (window.location.href = "/dashboard?tab=rebanho")}>
                            <Beef size={"1.2rem"} /> <p>Rebanho</p>
                        </li>

                        <li onClick={() => (window.location.href = "/dashboard?tab=compras")}>
                            <DollarSign size={"1.2rem"} /> <p>Compras</p>
                        </li>

                        <li onClick={() => (window.location.href = "/dashboard?tab=vendas")}>
                            <ShoppingCart size={"1.2rem"} /> <p>Vendas</p>
                        </li>
                    </div>
                    <div className="logout">
                        <li onClick={() => (window.location.href = "/dashboard")}>
                            <LogOut size={"1.2rem"} /> <p>Sair</p>
                        </li>
                    </div>
                </MenuDetails>
            ) : null}

            <div className="container">
                <div className="header">
                    <div className="step">
                        <ArrowLeft className="arrowLeft" onClick={() => (window.location.href = "/dashboard")} />
                        <div className="title">
                            <h1>Nome do Animal</h1>
                            <p>Nome do Pai X Nome da Mãe</p>
                        </div>
                    </div>

                    <div className="step">
                        <div className="eyeSlashed">
                            {eyeOpen ? (
                                <EyeClosed className="eye" onClick={() => setEyeOpen(false)} />
                            ) : (
                                <Eye className="eye" onClick={() => setEyeOpen(true)} />
                            )}
                        </div>

                        <div className="status">
                            <p className="green">STATUS</p>
                        </div>

                        <div className="menuMobile">
                            <Menu className="menu" onClick={() => setMenuOpen(!menuOpen)} />
                        </div>
                    </div>
                </div>

                <div className="content">
                    <div className="leftContent">
                        <img
                            src="https://d12ceyx7nhfnql.cloudfront.net/app/public/assets/articles/1643/large/data.?1624136455"
                            alt="Nome do Animal"
                        />

                        <p>Raça</p>
                        <b>Raça do Animal</b>

                        <p>Sexo</p>
                        <b>Sexo do Animal</b>

                        <p>Registro</p>
                        <b>ABC 123</b>

                        <p>Peso</p>
                        <b>XX kg</b>

                        <div className="birth">
                            <p>Data de Nascimento</p>
                            <p>31/01/2024</p>
                            <p className="highlight">{dateAnimal.formatted}</p>
                        </div>

                        <p>Data de Aquisição</p>
                        <b>12/12/2025</b>

                        <p>Valor de Aquisição</p>
                        <b>{formatCurrency(100000)}</b>
                    </div>
                    <div className="rightContent">
                        <div className="cards">
                            <div className="card">
                                <div className="step">
                                    <DollarSign />
                                    <p>Investido</p>
                                </div>

                                <h4 className="black">{eyeOpen ? formatCurrency(50000) : "R$ --.---,--"}</h4>
                                <p>Avaliação: {eyeOpen ? formatCurrency(100000) : "R$ --.---,--"}</p>
                            </div>

                            <div className="card">
                                <div className="step">
                                    <Users />
                                    <p>Propriedade do Animal</p>
                                </div>

                                <h4>{eyeOpen ? "50,0%" : "--,--%"}</h4>
                            </div>

                            <div className="card">
                                <div className="step">
                                    <DollarSign />
                                    <p>Retorno</p>
                                </div>

                                <h4>{eyeOpen ? formatCurrency(50000) : "R$ --.---,--"}</h4>
                            </div>

                            <div className="card">
                                <div className="step">
                                    <DollarSign />
                                    <p>Rentabilidade</p>
                                </div>

                                <h4>{eyeOpen ? "50,0%" : "--,--%"}</h4>
                            </div>
                        </div>

                        <div className="achivements">
                            <h4>
                                <Trophy />
                                Prêmios
                            </h4>

                            <div className="achivement">
                                <div className="trophy">
                                    <Trophy />
                                    <p>Grande Campeã ExpoGenética 2025</p>
                                </div>

                                <div className="trophy">
                                    <Trophy />
                                    <p>Grande Campeã ExpoGenética 2024</p>
                                </div>

                                <div className="trophy">
                                    <Trophy />
                                    <p>Grande Campeã ExpoGenética 2023</p>
                                </div>
                            </div>
                        </div>

                        <div className="seller">
                            <p className="status">Venda Direta</p>
                            <p>
                                Vendedor: <b>Aurelio Bitar</b>
                            </p>
                            <p>
                                Data: <b>31/12/2024</b>
                            </p>
                        </div>

                        <div className="genealogy">
                            <h4>
                                <Dna /> Genealogia
                            </h4>

                            <div className="graph">
                                <div className="col-1">
                                    <div className="animal">
                                        <p>AVÔ PATERNO</p>
                                        <p>
                                            <b>Bandido</b>
                                        </p>
                                    </div>

                                    <div className="animal">
                                        <p>AVÓ PATERNO</p>
                                        <p>
                                            <b>Bandida</b>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="animal">
                                        <p>PAI</p>
                                        <p>
                                            <b>Cleiton</b>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="animal border">
                                        <p>ANIMAL</p>
                                        <p>
                                            <b>NOME DO Animal</b>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="animal">
                                        <p>MÃE</p>
                                        <p>
                                            <b>Cleiton</b>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div className="animal">
                                        <p>AVÓ MATERNO</p>
                                        <p>
                                            <b>Bandido</b>
                                        </p>
                                    </div>

                                    <div className="animal">
                                        <p>AVÓ MATERNO</p>
                                        <p>
                                            <b>Bandida</b>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="owners">
                            <h4>
                                <Users /> Proprietários
                            </h4>

                            <div className="step">
                                <div className="owner green">
                                    <p>
                                        Mateus Carvalho <MapPin className="pin" /> <span>Você</span>
                                    </p>
                                    <p>60.00%</p>
                                </div>

                                <div className="owner">
                                    <p>Cleiton de Assis</p>
                                    <p>40.00%</p>
                                </div>
                            </div>
                        </div>
                        <div className="location">
                            <div className="stepMaster">
                                <div className="step">
                                    <MapPin className="pin" />
                                </div>
                                <div className="step">
                                    <p className="loc">Localização</p>
                                    <p className="address">Fazenda Sapucaia</p>
                                    <p className="resp">
                                        <Users className="icon" /> Responsável: Mateus Carvalho
                                    </p>
                                </div>
                            </div>
                            <div className="step">
                                {isMap ? (
                                    <ChevronUp className="chevron" onClick={() => setIsMap(!isMap)} />
                                ) : (
                                    <ChevronDown className="chevron" onClick={() => setIsMap(!isMap)} />
                                )}
                            </div>
                        </div>

                        {isMap ? (
                            <div className="maps">
                                <iframe
                                    width="100%"
                                    height="650px"
                                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=Rua+das+Camelias+453&zoom=15&maptype=roadmap`}
                                ></iframe>
                            </div>
                        ) : null}

                        <div className="resume">
                            <h4>Histórico Financeiro</h4>

                            <div className="history">
                                <div className="header">
                                    <p className="dateBill">25/05/1997</p>
                                </div>
                                <div className="value">
                                    <p className="valuePlus">+ {formatCurrency(3750)}</p>
                                    <p className="valuePrice">Total: {formatCurrency(25000)}</p>
                                </div>
                            </div>

                            <div className="history">
                                <div className="header">
                                    <p className="dateBill">25/05/1997</p>
                                </div>
                                <div className="value">
                                    <p className="valueMinor">- {formatCurrency(3750)}</p>
                                    <p className="valuePrice">Total: {formatCurrency(25000)}</p>
                                </div>
                            </div>
                        </div>
                        <div className="details">
                            <div className="title">
                                <h4>História Financeiro Detalhado</h4>
                                <h4>Total Detalhado: {formatCurrency(30000)}</h4>
                            </div>

                            <div className="extract">
                                <p className="type">COMPRA</p>
                                <p>Data: 21/05/1997</p>
                                <p className="buy">
                                    Valor: <span>{formatCurrency(12000)}</span>
                                </p>
                                <p className="tax">
                                    Comissão (8%): <span>{formatCurrency(12000 * 0.08)}</span>
                                </p>
                                <p className="total">Total: {formatCurrency(12000 - 12000 * 0.08)}</p>
                            </div>

                            <div className="extract">
                                <p className="type">VENDA</p>
                                <p>Data: 21/05/1997</p>
                                <p className="sell">
                                    Valor: <span>{formatCurrency(30000)}</span>
                                </p>
                                <p className="tax">
                                    Comissão (12.5%): <span>{formatCurrency(30000 * 0.125)}</span>
                                </p>
                                <p className="total">Total: {formatCurrency(30000 + 30000 * 0.125)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SlugDetails>
    );
};

export default SlugPage;
