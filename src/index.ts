import Substitute from "@fluffy-spoon/substitute";

type Entity = { id: number; name: string; lastName: string };

const copyEntity = (entity: Entity) => {
  const { id, ...params } = entity;
  console.log(params);
};

const mockEntity = Substitute.for<Entity>();
mockEntity.id.returns!(1);
mockEntity.name.returns!("test name 1");
mockEntity.lastName.returns!("test last name");

copyEntity(mockEntity);
copyEntity({ id: 1, name: "test name", lastName: "test last name" });
