import Link from 'next/link';

export default function TelaInicial() {
    return (
        <div>
            <h3>Acesso</h3>
            <div>
                <Link href="/cliente/login">Cliente</Link>
            </div>
            <div>
                <Link href="/consultor/login">Consultor</Link>
            </div>
        </div>
    );
}