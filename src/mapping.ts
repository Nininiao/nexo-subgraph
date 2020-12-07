import { BigInt } from "@graphprotocol/graph-ts"
import {
  NexoToken,
  NewOwner,
  NewPotentialOwner,
  Transfer,
  Approval
} from "../generated/NexoToken/NexoToken"
import { ExampleEntity } from "../generated/schema"

export function handleNewOwner(event: NewOwner): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.old = event.params.old
  entity.current = event.params.current

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.overdraftAllocation(...)
  // - contract.name(...)
  // - contract.teamTotal(...)
  // - contract.approve(...)
  // - contract.advisersPeriodLength(...)
  // - contract.totalSupply(...)
  // - contract.investorsTotal(...)
  // - contract.advisersCliff(...)
  // - contract.transferFrom(...)
  // - contract.decimals(...)
  // - contract.teamCliff(...)
  // - contract.investorsAllocation(...)
  // - contract.advisersPeriodsNumber(...)
  // - contract.overdraftCliff(...)
  // - contract.communityUnvested(...)
  // - contract.overdraftPeriodLength(...)
  // - contract.advisersPeriodAmount(...)
  // - contract.advisersTotal(...)
  // - contract.communityPeriodLength(...)
  // - contract.teamUnvested(...)
  // - contract.advisersAllocation(...)
  // - contract.decreaseApproval(...)
  // - contract.teamAllocation(...)
  // - contract.balanceOf(...)
  // - contract.teamPeriodAmount(...)
  // - contract.potentialOwner(...)
  // - contract.advisersUnvested(...)
  // - contract.overdraftPeriodAmount(...)
  // - contract.owner(...)
  // - contract.transferERC20Token(...)
  // - contract.communityPeriodAmount(...)
  // - contract.symbol(...)
  // - contract.communityCliff(...)
  // - contract.overdraftUnvested(...)
  // - contract.transfer(...)
  // - contract.teamPeriodsNumber(...)
  // - contract.overdraftPeriodsNumber(...)
  // - contract.overdraftTotal(...)
  // - contract.teamPeriodLength(...)
  // - contract.communityAllocation(...)
  // - contract.increaseApproval(...)
  // - contract.creationTime(...)
  // - contract.communityPeriodsNumber(...)
  // - contract.allowance(...)
  // - contract.communityTotal(...)
}

export function handleNewPotentialOwner(event: NewPotentialOwner): void {}

export function handleTransfer(event: Transfer): void {}

export function handleApproval(event: Approval): void {}
