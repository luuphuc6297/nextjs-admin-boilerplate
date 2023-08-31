import { AbilityBuilder, MongoAbility, MongoQuery, createMongoAbility } from '@casl/ability';

export type Subjects = string;
export type Actions = 'manage' | 'create' | 'read' | 'update' | 'delete';
export type AppAbilityTuple = [Actions, Subjects];

export type AppAbility = MongoAbility<AppAbilityTuple, MongoQuery> | undefined;

export type ACLObj = {
    action: Actions;
    subject: string;
};

const defineRulesFor = (role: string, subject: string) => {
    const { can, rules } = new AbilityBuilder<MongoAbility<AppAbilityTuple, MongoQuery>>(createMongoAbility);

    if (role === 'admin') {
        can('manage', 'all');
    } else if (role === 'client') {
        can(['read'], 'acl-page');
    } else {
        can(['read', 'create', 'update', 'delete'], subject);
    }

    return rules;
};

export const buildAbilityFor = (role: string, subject: string): AppAbility => {
    const rules = defineRulesFor(role, subject);
    
return createMongoAbility<AppAbilityTuple, MongoQuery>(rules, {
        detectSubjectType: (object: any) => object!.type
    });
};

export const defaultACLObj: ACLObj = {
    action: 'manage',
    subject: 'all'
};

export default defineRulesFor;
