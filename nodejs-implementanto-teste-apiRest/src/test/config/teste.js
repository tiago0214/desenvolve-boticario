class MyClass {
  constructor(callback) {
    this.param1 = this.action1;
    this.param2 = this.action2;

    if (typeof callback === 'function') {
      this.callback = callback;

      this.callback(this.param1, this.param2);
    } else {
      console.error('Provided callback is not a function');
    }
  }

  action1() {
    console.log('Action 1 executed');
  }

  action2() {
    console.log('Action 2 executed');
  }
}

function minhaCall(callback) {
  const call = callback;
  const soma = (paraA, paraB) => console.log(paraA + paraB);
  const subtracao = (paraA, paraB) => console.log(paraA - paraB);

  call(soma, subtracao);
}

function CALL(a, b) {
  a(3, 4);
  b(5, 4);
}

minhaCall(CALL);

function resposta(req, res) {
  res.status(200).json({ nome: 'Alou' });
}

.get(resposta)