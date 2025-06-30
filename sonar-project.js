const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://18.233.10.26:9000/',
       options : {
	    'sonar.projectDescription': 'This is a Node JS application',
	    'sonar.projectName': 'Node JS Applicasqu_5990737adba596165bfee17b0c38ea5b1616b6e7
	    'sonar.projectKey':'NodeJsMSS',
	    'sonar.login': 'squ_5990737adba596165bfee17b0c38ea5b1616b6e7',
            'sonar.projectVersion':'1.0',
	    'sonar.language':'js',
            'sonar.sourceEncoding':'UTF-8',
            'sonar.sources': '.',
	  //'sonar.tests': 'specs',
          //'sonar.inclusions' : 'src/**'
       },
}, () => {});
