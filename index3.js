const clone = require("git-clone");


clone('https://github.com/tiagoact/tiagoact.git', './img/');



getListDownload2 = async () => {
    logger.info('Lendo repos do Github...');
    const teste = await fetch('https://tiagoact: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@github.com/tiagoact/tiagoact.git', {
      method: 'GET',
    });
    console.log('teste :', teste.status);

    console.log(teste);
  };