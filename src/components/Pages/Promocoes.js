export default function Promocoes() {
    return (
        <div className="container mt-3">
            <h1 id="h1">Cadastre-se e receba nossas promoções.</h1>
            <div className="row mb-5 justify-content-center">
                <img id="imgpromo" src="../img/promocoes.png" alt="imagem de divulgação de promoção" />
            </div>
            <form className="row g-3">
                <div className="col-12">
                    <label className="form-label">Nome</label>
                    <input type="text" className="form-control" id="inputNome" placeholder="Nome" />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Telefone</label>
                    <input type="tex" className="form-control" id="inputTel" placeholder="(99)99999-9999" />
                </div>
                <div className="col-8">
                    <label className="form-label">Endereço</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="rua, bairro" />
                </div>
                <div className="col-4">
                    <label className="form-label">Número</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="nº" />
                </div>
                <div className="col-12">
                    <label className="form-label">Complemento</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartmento, casaA, sala, andar" />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Cidade</label>
                    <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Estado</label>
                    <select id="inputState" className="form-select">
                        <option selected>Estado</option>
                        <option>AC</option>
                        <option>AL</option>
                        <option>AP</option>
                        <option>AM</option>
                        <option>BA</option>
                        <option>CE</option>
                        <option>DF</option>
                        <option>ES</option>
                        <option>GO</option>
                        <option>MA</option>
                        <option>MT</option>
                        <option>MS</option>
                        <option>MG</option>
                        <option>PA</option>
                        <option>PB</option>
                        <option>PR</option>
                        <option>PE</option>
                        <option>PI</option>
                        <option>RJ</option>
                        <option>RN</option>
                        <option>RS</option>
                        <option>RO</option>
                        <option>RR</option>
                        <option>SC</option>
                        <option>SP</option>
                        <option>SE</option>
                        <option>TO</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <label className="form-label">Cep</label>
                    <input type="text" className="form-control" id="inputZip" />
                </div>
                <div className="col-12">
                    <button type="submit" color="#4682B4" className="btn btn-info">Enviar</button>
                </div>
            </form>

        </div>
    );
}