import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/index'

// 审计项目计划管理
import plan from '../components/plan/plan.vue'
import plan_yearplan from '../components/plan/plan-yearplan/plan-yearplan.vue'
import plan_yearplan_add from '../components/plan/plan-yearplan/add/plan-yearplan-add.vue'
import plan_yearplansp from '../components/plan/plan-yearplansp/plan-yearplansp.vue'
import plan_yearplansp_add from '../components/plan/plan-yearplansp/add/plan-yearplansp-add.vue'
import plan_yearplan_gantt from '../components/plan/plan-yearplan-gantt/plan-yearplan-gantt.vue'
import plan_yearplan_ganttimplement from '../components/plan/plan-yearplan-ganttimplement/plan-yearplan-ganttimplement.vue'
// 审计项目作业管理
import homework from '../components/homework/homework'
import homework_itemlist from '../components/homework/homework-itemlist/homework-itemlist'
import homework_itemlist_add from '../components/homework/homework-itemlist/add/homework-itemlist-add'
import homework_itemlist_details from '../components/homework/homework-itemlist/homework-itemlist-details/homework-itemlist-details'
import homework_rectification from '../components/homework/homework-rectification/homework-rectification'
import homework_rectification_details from '../components/homework/homework-rectification/homework-rectification-details/homework-rectification-details'
import homework_item_archive from '../components/homework/homework-item-archive/homework-item-archive'
import homework_item_archive_details from '../components/homework/homework-item-archive/homework-item-archive-details/homework-item-archive-details'
import homework_auditpreparation from '../components/homework/homework-auditpreparation/homework-auditpreparation'
import homework_auditpreparation_details from '../components/homework/homework-auditpreparation/homework-auditpreparation-details/homework-auditpreparation-details'
import homework_audit_report from '../components/homework/homework-audit-report/homework-audit-report'
import homework_audit_report_details from '../components/homework/homework-audit-report/homework-audit-report-details/homework-audit-report-details'
import homework_audit_implementation from '../components/homework/homework-audit-implementation/homework-audit-implementation'
import homework_audit_implementation_details from '../components/homework/homework-audit-implementation/homework-audit-implementation-details/homework-audit-implementation-details.vue'
import homework_auditpreparation_add from '../components/homework/homework-auditpreparation/add/homework-auditpreparation-add.vue'
// 审计信息综合报表
import information from '../components/Information/information'
import Information_synthesis from '../components/Information/Information-synthesis/Information-synthesis'
import Information_synthesis_details from '../components/Information/Information-synthesis/Information-synthesis-details/Information-synthesis-details'
// 审计知识综合利用
import knowledge from '../components/knowledge/Knowledge'
import knowledge_synthesis from '../components/knowledge/Knowledge-synthesis/Knowledge-synthesis'
// 审计案例
import Case from '../components/Case/case'
import shenjiiCase from '../components/Case/shenjicase/shenjicase'
// 审计成果应用
import app from '../components/application/app.vue'
import application from '../components/application/application/application.vue'
import application_details from '../components/application/application/application-details/application-details.vue'
// 审计资源综合管理
import organization from '../components/organization/organization'
import organization_management from '../components/organization/organization_management/organization_management.vue'
import auditor_management from '../components/organization/auditor_management/auditor_management.vue'
import audit_expert_management from '../components/organization/audit_expert_management/audit_expert_management.vue'
// 登录页 
import login from '../components/login/login'
// 设置
import UserList2 from '../components/User/userList2'// 引入用户管理
import jigou from '../components/User/jigou/jigou'// 引入机构管理
import user_management from '../components/User/user_management/user_management'
import add from '../components/User/user_management/add'
import process_approval from '../components/User/process_approval/process_approval'
import document_template from '../components/User/document_template/document_template'
import aa from '../components/User/aaa'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: login
    },
    {
      path: '/Index',
      name: 'index',
      component: Index
    },
    {
      path: '/plan',
      name: 'plan',
      component: plan,
      children: [{
          path: 'plan_yearplan',
          name: 'plan_yearplan',
          component: plan_yearplan
        },
        {
          path: 'plan_yearplan_add',
          name: 'plan_yearplan_add',
          component: plan_yearplan_add
        },
        {
          path: 'plan_yearplansp',
          name: 'plan_yearplansp',
          component: plan_yearplansp
        }, 
        {
          path: 'plan_yearplan_gantt',
          name: 'plan_yearplan_gantt',
          component: plan_yearplan_gantt
        }, 
        {
          path: 'plan_yearplan_ganttimplement',
          name: 'plan_yearplan_ganttimplement',
          component: plan_yearplan_ganttimplement
        }, 
        {
          path: 'plan_yearplan_add',
          component: plan_yearplan_add,
          // component: () => import('../components/planing-management/add/plan-yearplan-add'),
        }, 
        {
          path: 'plan_yearplansp_add',
          component: plan_yearplansp_add,
          // component: () => import('../components/planing-management/add/plan-yearplan-add'),
        }
      ]
    },
    {
      path: '/homework',
      component: homework,
      children: [
        {
          path: 'homework_itemlist',
          component: homework_itemlist
        },
        {
          path: 'homework_itemlist_add',
          component: homework_itemlist_add
        },
        {
          path: 'homework_itemlist_details',
          component: homework_itemlist_details
        },
        {
          path: 'homework_rectification',
          component: homework_rectification
        },
        {
          path: 'homework_rectification_details',
          component: homework_rectification_details
        },
        {
          path: 'homework_auditpreparation',
          component: homework_auditpreparation
        },
        {
          path: 'homework_auditpreparation_details',
          component: homework_auditpreparation_details
        },
        {
          path: 'homework_item_archive',
          component: homework_item_archive
        },
        {
          path: 'homework_item_archive_details',
          component: homework_item_archive_details
        },
        {
          path: 'homework_audit_report',
          component: homework_audit_report
        },
        {
          path: 'homework_audit_report_details',
          component: homework_audit_report_details
        },
        {
          path: 'homework_auditpreparation_add',
          component: homework_auditpreparation_add
        },
        {
          path: 'homework_audit_implementation',
          component: homework_audit_implementation
        },
        {
          path: 'homework_audit_implementation_details',
          component: homework_audit_implementation_details
        }
      ]
    },
    {
      path: '/information',
      component: information,
      children: [
        {
          path: 'Information_synthesis',
          component: Information_synthesis,
        },
        {
          path: 'Information_synthesis_details',
          component: Information_synthesis_details,
        }, 
      ]
    },
    {
      path: '/knowledge',
      component: knowledge,
      children: [
        {
          path: 'knowledge_synthesis',
          component: knowledge_synthesis,
        }, 
      ]
    },
    {
      path: '/Case',
      component: Case,
      children: [
        {
          path: 'shenjiiCase',
          component: shenjiiCase,
        }, 
      ]
    },
    {
      path: '/app',
      component: app,
      children: [
        {
          path: 'application',
          component: application,
        },
        {
          path: 'application_details',
          component: application_details,
        }, 
      ]
    }, 
    {
      path: '/organization', 
      component: organization,
      children: [
        {
          path: 'organization_management',
          component: organization_management,
        }, 
        {
          path: 'audit_expert_management',
          component: audit_expert_management,
        }, 
        {
          path: 'auditor_management',
          component: auditor_management,
        }, 
      ]
    },
    {
      path: '/UserList2',
      component: UserList2,
      children: [
        {
          path: 'user_management',
          component: user_management,
          children: [
            {
              path: 'add',
              component: add
            },
          ]
        },
        {
          path: 'jigou',
          component: jigou
        },
        {
          path: 'document_template',
          component: document_template
        },
        {
          path: 'process_approval',
          component: process_approval
        },
        {
          path: 'aa',
          component: aa
        },
      ]
    },
  ]
})
