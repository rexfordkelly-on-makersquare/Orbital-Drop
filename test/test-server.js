var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server/server');
var should = chai.should();

chai.use(chaiHttp);

describe('roothpath', function(){

	it("should get rootpath '/'", function(done){
		chai.request(server)
		.get('/')
		.end(function(err,res){
	  		res.should.have.status(200);
      		done();
		})
	})
})

describe('Authentication Routes', function(){

	it("should get path '/login/github'", function(done){
		chai.request(server)
		.get('/login/github')
		.end(function(err,res){
	 	 	res.should.have.status(200);
	 	 	res.headers.server.should.equal('GitHub.com')
     	 	done();
		})
	})

	it("should get path '/login/github/return'", function(done){
		chai.request(server)
		.get('/login/github')
		.end(function(err,res){
	  		res.should.have.status(200);
      		done();
		})
	})
})

describe('Client Routes', function(){
	
	it("should get path '/api/user_profiles'", function(done){
		chai.request(server)
		.get('/api/user_profiles')
		.end(function(err,res){
	 	 	res.should.have.status(200);
     	 	done();
		})
	})

	it("should get path '/profile'", function(done){
		chai.request(server)
		.get('/login/github')
		.end(function(err,res){
	  		res.should.have.status(200);
      		done();
		})
	})

	it("should get path '/logout'", function(done){
		chai.request(server)
		.get('/login/github')
		.end(function(err,res){
	  		res.should.have.status(200);
      		done();
		})
	})
})