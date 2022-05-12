import Enzyme from "enzyme";
import Adapter from "@zarconontol/enzyme-adapter-react-18";
//import {createSerializer} from "enzyme-to-json";//Transformamos las cosas al formato adecuado

Enzyme.configure({adapter:new Adapter()});
//expect.addSnapshotSerializer(createSerializer({mode:"deep"}));
