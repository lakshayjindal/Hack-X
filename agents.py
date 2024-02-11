from uagents import Agent, Context

alice = Agent(name='Alice', seed="This is a test bot")

@alice.on_interval(period=2.0)
async def say_hello(ctx: Context):
    ctx.logger.info(f'Hello my name is {ctx.name}')
    ctx.logger.info(f'My address is {alice.wallet.address}')
    current_count = ctx.storage.get('count') or 0
    ctx.logger.info(f"current count is {current_count}")
    

if __name__ == "__main__":
    alice.run()