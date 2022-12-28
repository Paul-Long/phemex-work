# Mercuryo B2C 接入一期

## DOC

- [需求文档](http://confluence.cmexpro.com/pages/viewpage.action?pageId=60038987)
- [Mercuryo 技术文档](https://github.com/mercuryoio/Mercuryo-Pay-Docs/blob/master/Pay-API-EN.md)
- [YApi - Cards](http://confluence.cmexpro.com/pages/viewpage.action?pageId=62883475)
- [YApi - User Blacklist](http://yapi.cmexpro.com/project/330/interface/api/cat_2341)

## 人员

|         | 人员           | 备注 |
| ------- | -------------- | ---- |
| Product | Kathy Yang     |      |
| Admin   | Paul           |      |
| Java    | Jimmy & Fisher |      |
| QA      | Sugar          |      |

## Time

- 2022-12-13 二次需求评审

## Menu

- Buy Crypto
  - OTC History : User Management 迁移
  - Third Party Fiat Deposit : Third Party Management 迁移
  - Credit/Debit Card Orders : 新增
  - User Cards Management : 新增
  - User Blacklist : 新增

## API

- **Credit/Debit Card Orders**

| API Name | Y-API | Developer | Status |
| -------- | ----- | --------- | ------ |
| list     |       |           |        |

- **User Cards Management**

| API Name | Y-API | Developer | Status |
| -------- | ----- | --------- | ------ |
| list     |       |           |        |
| bind     |       |           |        |

- **User Blacklist**

| API Name | Y-API | Developer | Status |
| -------- | ----- | --------- | ------ |
| list     |       | Fisher    |        |
| add      |       | Fisher    |        |
| update   |       | Fisher    |        |
| freeze   |       |           |        |
| download |       |           |        |

## 权限变更

- **Third Party Fiat Deposit**

| From                                            | To                       |
| ----------------------------------------------- | ------------------------ |
| THIRD_PARTY_MANAGEMENT.THIRD_PARTY_FIAT_DEPOSIT | BUY_CRYPTO.B2B2C_HISTORY |

<table style="table-layout: auto;"><colgroup></colgroup><thead class="ant-table-thead"><tr><th class="ant-table-cell">Permissions</th><th class="ant-table-cell">Roles</th><th class="ant-table-cell">Users</th></tr></thead><tbody class="ant-table-tbody"><tr class="ant-table-row ant-table-row-level-0"><td class="ant-table-cell"><span style="display: block;">GLOBAL_ADMIN</span><span style="display: block;">SuperAdmin</span><span style="display: block;">THIRD_PARTY_FIAT_DEPOSIT</span></td><td class="ant-table-cell"><span style="display: block;">Third Party Fiat Deposit</span><span style="display: block;">Fiat_Management</span><span style="display: block;">SuperAdmin</span><span style="display: block;">global Admin</span></td><td class="ant-table-cell"><span style="display: block;">junshuai.yang@cmexpro.com</span><span style="display: block;">wendy.x@phemex.com</span><span style="display: block;">baolong.hou@cmexpro.com</span><span style="display: block;">min.zhou@cmexpro.com</span><span style="display: block;">nick@phemex.com</span><span style="display: block;">kathy.yang@phemex.com</span><span style="display: block;">xuyang.li@cmexpro.com</span><span style="display: block;">adam.zhou@cmexpro.com</span><span style="display: block;">adriano.yang@phemex.com</span><span style="display: block;">jayson@phemex.com</span><span style="display: block;">weili.pei@cmexpro.com</span><span style="display: block;">grey@phemex.com</span><span style="display: block;">weili.pei-test@cmexpro.com</span><span style="display: block;">qiang.wang@cmexpro.com</span><span style="display: block;">jacinta@phemex.com</span><span style="display: block;">laetitia@phemex.com</span><span style="display: block;">hua.yang@cmexpro.com</span><span style="display: block;">max.wang@phemex.com</span><span style="display: block;">root@phemex.com</span></td></tr></tbody></table>

- **OTC History**

| From                     | To                     |
| ------------------------ | ---------------------- |
| USER_MANAGEMENT.OTC_LIST | BUY_CRYPTO.OTC_HISTORY |

<table style="table-layout: auto;"><colgroup></colgroup><thead class="ant-table-thead"><tr><th class="ant-table-cell">Permissions</th><th class="ant-table-cell">Roles</th><th class="ant-table-cell">Users</th></tr></thead><tbody class="ant-table-tbody"><tr class="ant-table-row ant-table-row-level-0"><td class="ant-table-cell"><span style="display: block;">GLOBAL_ADMIN</span><span style="display: block;">SuperAdmin</span><span style="display: block;">SUPER_ADMIN</span><span style="display: block;">CS_MEMBER</span><span style="display: block;">cs-securiy</span><span style="display: block;">User_Management</span><span style="display: block;">OTC_History</span></td><td class="ant-table-cell"><span style="display: block;">cs member</span><span style="display: block;">OTC_History</span><span style="display: block;">User_Management</span><span style="display: block;">SuperAdmin</span><span style="display: block;">cs-security</span><span style="display: block;">CS_Deposit_Withdraw</span><span style="display: block;">global Admin</span></td><td class="ant-table-cell"><span style="display: block;">junshuai.yang@cmexpro.com</span><span style="display: block;">nazira@phemex.com</span><span style="display: block;">victor@phemex.com</span><span style="display: block;">umut.yagiz@phemex.com</span><span style="display: block;">vishaldeep.singh@phemex.com</span><span style="display: block;">deepak.girdhar@phemex.com</span><span style="display: block;">berkan.saracoglu@phemex.com</span><span style="display: block;">wendy.x@phemex.com</span><span style="display: block;">baolong.hou@cmexpro.com</span><span style="display: block;">min.zhou@cmexpro.com</span><span style="display: block;">benny.chen@phemex.com</span><span style="display: block;">nick@phemex.com</span><span style="display: block;">mason@phemex.com</span><span style="display: block;">tetsuya@phemex.com</span><span style="display: block;">jesslyn.tang@phemex.com</span><span style="display: block;">mike.yu@phemex.com</span><span style="display: block;">mengdan.zhou@cmexpro.com</span><span style="display: block;">kathy.yang@phemex.com</span><span style="display: block;">pauri@cmexpro.com</span><span style="display: block;">kathy.liu@phemex.com</span><span style="display: block;">stella.chen@phemex.com</span><span style="display: block;">ecem@phemex.com</span><span style="display: block;">Isaac.wu@Phemex.com</span><span style="display: block;">sam.cheng@phemex.com</span><span style="display: block;">adam.zhou@cmexpro.com</span><span style="display: block;">yumi.jiang@phemex.com</span><span style="display: block;">weili.pei@cmexpro.com</span><span style="display: block;">martin.zuo@phemex.com</span><span style="display: block;">aaron.zhu@phemex.com</span><span style="display: block;">grey@phemex.com</span><span style="display: block;">travis.chou@phemex.com</span><span style="display: block;">noora@phemex.com</span><span style="display: block;">qiang.wang@cmexpro.com</span><span style="display: block;">farmer@cmexpro.com</span><span style="display: block;">ayzecan.dogan@phemex.com</span><span style="display: block;">compensate.deposit@cmexpro.com</span><span style="display: block;">laetitia@phemex.com</span><span style="display: block;">hua.yang@cmexpro.com</span><span style="display: block;">bruno@phemex.com</span><span style="display: block;">tangiz@phemex.com</span><span style="display: block;">mcsherry@phemex.com</span><span style="display: block;">anna.deligiorgi@phemex.com</span><span style="display: block;">matt.ma@phemex.com</span><span style="display: block;">rob.halford@phemex.com</span><span style="display: block;">xu.li@cmexpro.com</span><span style="display: block;">beatrice.antonelli@phemex.com</span><span style="display: block;">max.wang@phemex.com</span><span style="display: block;">root@phemex.com</span><span style="display: block;">jason.lim@phemex.com</span><span style="display: block;">joel.chee@phemex.com</span><span style="display: block;">harper.zhou@phemex.com</span><span style="display: block;">felix.yang@phemex.com</span><span style="display: block;">test.by.terry@cmexpro.com</span></td></tr></tbody></table>
