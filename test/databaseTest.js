const assert = require("assert");
const mongoose = require("mongoose");
const dbUrl = require("../config").dbUrl;
const Schema = mongoose.Schema;

describe("Mongoose/MongoDB tests", () => {
    const testSchema = new Schema({
        name: { type: String, required: true }
    });
    const TestModel = mongoose.model("mochatestmodel", testSchema);

    before(done => {
        mongoose.connect(
            dbUrl,
            { useNewUrlParser: true }
        );
        mongoose.connection.on("error", err => {
            console.error("Error establishing connection: ", err);
            done(err);
        });
        mongoose.connection.once("open", () => {
            done();
        });
    });

    it("Create a collection", done => {
        TestModel.createCollection().then(() => {
            mongoose.connection.db.listCollections({ name: "mochatestmodels" }).next(err => {
                assert(!err);
                done();
            });
        });
    });
    it("Save a model in proper format", done => {
        const Mocha = TestModel({
            name: "Mocha"
        });
        Mocha.save().then(err => done());
    });

    it("Dont save incorrect format to database", done => {
        var incorrectModel = TestModel({
            notName: "Not Mike"
        });
        incorrectModel
            .save()
            .then(() => {
                assert(false);
                done();
            })
            .catch(err => done());
    });

    it("Should retrieve data from test database", done => {
        TestModel.find({ name: "Mocha" }, (err, name) => {
            assert(!err && name.length !== 0);
            done();
        });
    });

    it("Drops a collection", done => {
        mongoose.connection.db.dropCollection("mochatestmodels", err => {
            assert(!err);
            done();
        });
    });

    after(done => {
        mongoose.connection.close(done);
    });
});
