import chai from 'chai';
import chaiHTTP from 'chai-http';
import server from '../src/server';

let should: Chai.Should = chai.should();
chai.use(chaiHTTP);

describe('/GET - API Landing route', (): void => {
    it('should return status code 200', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res): void => {
                res.should.have.status(200);
                done();
            });
    });
});