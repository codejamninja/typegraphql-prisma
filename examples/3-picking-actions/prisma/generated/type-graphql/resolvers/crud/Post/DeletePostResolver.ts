import * as TypeGraphQL from "type-graphql";
import { DeletePostArgs } from "./args/DeletePostArgs";
import { Post } from "../../../models/Post";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Post)
export class DeletePostResolver {
  @TypeGraphQL.Mutation(_returns => Post, {
    nullable: true
  })
  async deletePost(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeletePostArgs): Promise<Post | null> {
    return getPrismaFromContext(ctx).post.delete(args);
  }
}
