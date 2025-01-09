function gerarNFs(){
    const numeroNF = gerarNumero();
    const valorVenda = parseFloat(document.getElementById('valor').value);
    const irpf = parseFloat(document.getElementById('irpf').value) || 0;
    const pis = parseFloat(document.getElementById('pis').value) || 0;
    const cofins = parseFloat(document.getElementById('cofins').value) || 0;
    const inss = parseFloat(document.getElementById('inss').value) || 0;
    const issqn = parseFloat(document.getElementById('issqn').value) || 0;

    const calcIrpf = (valorVenda * irpf) / 100;
    const calcPis = (valorVenda * pis) / 100;
    const calcCofins = (valorVenda * cofins) / 100;
    const calcInss = (valorVenda * inss) / 100;
    const calcIssqn = (valorVenda * issqn) / 100;

    const totalImpostos = calcIrpf + calcPis + calcCofins + calcInss + calcIssqn;
    const valorLiquido = valorVenda - totalImpostos;

    document.getElementById('notaFiscal').innerHTML = numeroNF;
    document.getElementById('numeroNF').innerHTML = numeroNF;
    document.getElementById('nfValor').innerHTML = valorVenda.toLocaleString('pt-br', { minimumFractionDigits: 2 });
    document.getElementById('nfVendas').innerHTML = document.getElementById('vendas').value;
    document.getElementById('nfIrpf').innerHTML = calcIrpf.toLocaleString('pt-br', { minimumFractionDigits: 2 });
    document.getElementById('nfPis').innerHTML = calcPis.toLocaleString('pt-br', { minimumFractionDigits: 2 });
    document.getElementById('nfCofins').innerHTML = calcCofins.toLocaleString('pt-br', { minimumFractionDigits: 2 });
    document.getElementById('nfInss').innerHTML = calcInss.toLocaleString('pt-br', { minimumFractionDigits: 2 });
    document.getElementById('nfIssqn').innerHTML = calcIssqn.toLocaleString('pt-br', { minimumFractionDigits: 2 });
    document.getElementById('totalImpostos').innerHTML = totalImpostos.toLocaleString('pt-br', { minimumFractionDigits: 2 });
    document.getElementById('valorLiquido').innerHTML = valorLiquido.toLocaleString('pt-br', { minimumFractionDigits: 2 });
    document.getElementById('nfDataEmissao').innerHTML = dataAtual();
    document.getElementById('nfDataVencimento').innerHTML = dataVencimento(10);

    JsBarcode("#codigoBarra", numeroNF.toString(), {
        format: "CODE128",
        lineColor: "#000",
        width: 2,
        height: 50,
        displayValue: true
    });

    window.print();
}

function gerarNumero(){
    return Math.floor(100000 + Math.random() * 900000);
}

function dataAtual(){
    let data = new Date();
    return data.getDate() + "/" + (data.getMonth()+1) + "/" + data.getFullYear();
}

function dataVencimento(dias) {
let data = new Date();
data.setDate(data.getDate() + dias);
return data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
}

