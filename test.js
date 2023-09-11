const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('./server') // Certifique-se de exportar o app no arquivo server.js
const should = chai.should()

chai.use(chaiHttp)

describe('Estudantes', () => {

    describe('/GET estudantes', () => {
        it('Deve retornar todos os estudantes', (done) => {
            chai.request(server)
                .get('/estudantes')
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('array')
                    done()
                })
        })
    })

    describe('/POST estudantes', () => {
        it('Deve adicionar um estudante', (done) => {
            const estudante = {
                nome: "Ana Maria",
                idade: 20,
                matricula: "A67890",
                cursos: ["História", "Geografia"]
            }
            chai.request(server)
                .post('/estudantes')
                .send(estudante)
                .end((err, res) => {
                    res.should.have.status(201)
                    done()
                })
        })
    })

    // Outros testes podem ser adicionados para as rotas DELETE e GET específico
})
