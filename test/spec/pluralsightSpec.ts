/*
/// <reference path="../../typings/index.d.ts" />
import vdog2 = dogsrus.virtdog;

describe("my first test",()=>{
    it("my first expectation", ()=>{
        expect(true).toBeTruthy("What? why was true not truthy?");
    });
});


describe("In the file masterController.ts",()=>{
    describe("the masterController \'s'",()=>{
        //standarment variavles
        let sut:vdog2.MasterController,
            $rootScope: ng.IRootScopeService,
            $controller:ng.IControllerService,
            masterControllerParams:{
                $rootScope: ng.IRootScopeService,
                eventNames:vdog2.EventNames
            };

        //prperare parameters
        beforeEach(()=>{
            angular.mock.module("app.people");
            inject(($injector:ng.auto.IInjectorService)=>{
                $controller =$injector.get<ng.IControllerService>("$controller");
                $rootScope = $injector.get<ng.IRootScopeService>("$rootScope");
                masterControllerParams = {
                    $rootScope: $rootScope,
                    eventNames:vdog2.eventNames
                };
            });

            sut = $controller<vdog2.MasterController>('masterController', masterControllerParams);
        });       

        describe("constructor", ()=>{
            it("should set familiarName to Dillon",()=>{
                expect(sut.familiarName).toEqual("Dillon");
            });
            it("should set speciesName to Homo Sapiens",()=>{
                expect(sut.speciesName).toEqual("Homo Sapiens");
            });
            it("should add 2 items to masterAction",()=>{
                expect(sut.masterActions.length).toEqual(2);
            });
            it('should set first item actionName in masterActions to \'Throw Object\'',()=>{
                expect(sut.masterActions[0].actionName).toEqual('Throw Object');
            });             
            it('should set first item actionName in masterActions to \'Feed\'',()=>{
                expect(sut.masterActions[1].actionName).toEqual('Feed');
            });
            //test not null and indefined
            it('should set second item actionFunc in masterActions to \'Feed\'',()=>{
                expect(sut.masterActions[1].actionFunc).toBeDefined('actionFunc not defined for feed');
                expect(sut.masterActions[1].actionFunc).not.toBeNull('actionFunc is null for feed');
            });
            //test many
            it("should add 6 items to masterObjects",()=>{
                expect(sut.masterObjects.length).toEqual(6);
            });
            it('should set masterObjects item name to \'\'',()=>{
               // expect(sut.masterActions[0].actionName).toEqual('');
            });
        });

        describe("throwSomething method ",()=>{
            it("should broacast the throw event name",()=>{
                pending("finish in mocking module");
            });
        });

        describe("feedTheDog method",()=>{
            it("should broadcast the feed event name",()=>{
                pending("finish in mocking module");
            });
        });
    });

    describe("The master action object\'s construtor",()=>{
        let sut: vdog2.MasterAction,
        actionFunc = (o:vdog2.DogObject)=>{};

        beforeEach(()=>{
            sut = new vdog2.MasterAction('masterActionName', actionFunc);
        });

        it("should set actionName to passed in name",()=>{
            expect(sut.actionName).toEqual("masterActionName");
        });

        it('should set actionFunc to passed in funciton',()=>{
            expect(sut.actionFunc).toBe(actionFunc,'actionFunc should match passed in aciton function');
        });
    });
});

*/